const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const image = require('./controllers/image');
const { response } = require('express');

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

app.use(express.json()); 

app.use(cors());



app.get('/', (req, resp) => {
	resp.send(db.users);
})


app.post('/signin', (req, resp) => { signin.handleSignIn(req, resp, db, bcrypt)} )


app.post('/register', (req, resp) => { register.handleRegister(req, resp, db, bcrypt) })


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


app.put('/image', (req, resp) => {image.handleImage(req, resp, db)} )
app.post('/imageurl', (req, resp) => {image.handleAPI(req, resp)} )

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });


app.listen(3000, () => {
	console.log('app is running on port: 3000');
})

