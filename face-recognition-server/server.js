const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
const database = {
	users: [
		{
			id: '123',
			name: 'Sebi',
			password: 'secret',
			email: 'seb@gmail.com',
			entries: 0,
			joined: new Date()
		},
		{
			id: '124',
			name: 'Andrei',
			password: 'mypass',
			email: 'andrei@gmail.com',
			entries: 0,
			joined: new Date()
		}
	],
	login: [
		{
		id: '987',
		has: '',
		email: 'seb@gmail.com'
		}
	]
}

app.get('/', (req, resp) => {
	resp.send(database.users);
})

app.post('/signin', (req, resp) => {
	if(req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password){
		resp.json('success');
	} else {
		resp.status(400).json('error logging in');
	}
})

app.post('/register', (req, resp) => {
	const { email, name, password } = req.body;
	database.users.push({
		id: '125',
		name: name,
		email: email,
		password: password,
		entries: 0,
		joined: new Date()
	})
	resp.json(database.users[database.users.length - 1]);
})

app.get('/profile/:id', (req, resp) => {
	const { id } = req.params;
	let found = false;
	database.users.forEach(user => {
		if(user.id === id) {
			found = true;
			return resp.json(user);
		}
	})
	if(!found)
		resp.status(400).json('not found');
})

app.put('/image', (req, resp)=>{
	const { id } = req.body;
	let found = false;
	database.users.forEach(user => {
		if(user.id === id){
			found = true;
			user.entries++;
			return resp.json(user.entries);
		}
	})
	if(!found)
		resp.status(400).json('not found');
})

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });


app.listen(3000, () => {
	console.log('app is running on port: 3000');
})

