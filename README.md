## ⚡️ SmartBrain: web application with Clarifai's AI Face Detection Model⚡️

Run instructions:
```
1. Clone the repository
2. Run `npm install`
3. Run `npm start`
```
## Front-End
### **Components:** 
- **Navigation** /nav for **signout** / **signin** / **register**.
- **Logo** 
- **ImageLinkForm** for image link input and submit button for detection.
- **Rank** - displays user's entries. Established by number of user's image tests.
- **FaceRecognition**:
  The object for face recognition will first need to figure out the first dot, second dot, third dot and the fourth dot, around the face and then we're just going to wrap it in a border. We are just using the response Clarifai's API gives us, the coordinates of the face in the picture. \
- Quick **Sign In / Register Form** using [tachyons](https://tachyons.io/components/forms/sign-in/index.html). 

### **Built with:**

- [Particles.js](https://vincentgarreau.com/particles.js/) interactive background
- [CSS Patterns Gallery](http://projects.verou.me/css3patterns/)
- [AI Face Detection Model](https://www.clarifai.com/models/ai-face-detection)
- [Tachyons](https://tachyons.io/)
- [React Tilt](https://awesomeopensource.com/project/jonathandion/react-tilt)

## Back-End (Setting Up the Server) 🔥

```
Routes details:
e.g. localhost:3000/ (root) - "get all users"
  /signin --> POST request, POST from body, user info
		  ->> respond with success/fail
  /register --> POST request, add data to database/server
		  ->> respond with new created user
  /profile/:userid --> GET 
		  ->> respond with user
  /image --> PUT request, update on user profile
		  ->> respond with updated entries count
 ```
 *check face-recognition-server/ for **code review***
### **Resources:**

- [Nodemon](https://www.npmjs.com/package/nodemon) - automatically restarting the node application when file changes in the directory are detected.
- [Bcrypt-NodeJS](https://www.npmjs.com/package/bcrypt-nodejs) - used to have a secure and real login form, encrypted passwords for users. (deprecated, use [Bcrypt](https://www.npmjs.com/package/bcrypt) instead) \
[Postman APIs Platform](https://www.postman.com/) has been used for tests, I assume it can be used any other tool directly in the browser from your browser web store (e.g. REST Ape - Advanced API Testing Client - Chrome Web Store).
- [Knex.js](https://knexjs.org/) - query builder for postgreSQL. 

(⚡️) Hosting powered by [Firebase](https://firebase.google.com/) 🔜 

Updates will be made from time to time for minor bug fixes, improvements and updates.



 
 


