const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const knex = require('knex');

const db = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'smart-brain'
  }
});

// db.select('*').from('users').then(data => {
// 	console.log(data);
// });

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, resp) => {
	resp.send('Succes!');
})


app.post('/signin', (req, resp) => {
	db.select('email', 'hash').from('login')
		.where('email', '=', req.body.email)
		.then(data => {
			const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
			if(isValid) {
				return db.select('*').from('users')
					.where('email', '=', req.body.email)
					.then(user => {
						resp.json(user[0])
					})
					.catch(err => resp.status(400).json('Unable to get user!'))
			} else {
				resp.status(400).json('Wrong credentials!')
			}
		})
		.catch(err => resp.status(400).json('Wrong credentials!'))
})


app.post('/register', (req, resp) => {
	const { email, name, password } = req.body;
	const hash = bcrypt.hashSync(password);
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				name: name,
				joined: new Date()
			})
			.then(user => {
				resp.json(user[0])
			})
		})
		.then(trx.commit)
		.catch(trx.rollback)
	})

		.catch(err => resp.status(400).json('Unable to register'))
})


app.get('/profile/:id', (req, resp) => {
	const { id } = req.params;
	db.select('*').from('users').where({id: id})
		.then(user => {
			if(user.length) {
				resp.json(user[0])
			} else{
				resp.status(400).json('Not found!')
			}
	})
	.catch(err => resp.status(400).json('error getting user'))
})


app.put('/image', (req, resp)=>{
	const { id } = req.body;
	db('users').where('id', '=', id)
		.increment('entries', 1)
		.returning('entries')
		.then(entries => {
			resp.json(entries[0]);
		})
		.catch(err => resp.status(400).json('Unable to get entries'))
})

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });


app.listen(3000, () => {
	console.log('app is running on port: 3000');
})

