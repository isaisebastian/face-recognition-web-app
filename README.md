## ⚡️ SmartBrain: web application with Clarifai's AI Face Detection Model⚡️

Run instructions:
```
1. Clone the repository
2. Run `npm install`
3. Run `npm start`
```
## Front-End
### **Components:** 
- Navigation nav for signout / signin / register.
- Logo for looking nice
- ImageLinkForm for image link input and submit button for detection.
- Rank (static for now) - displays user's rank. This rank is established by number of user's images detected with faces.
- FaceRecognition:
  The object for face recognition will first need to figure out the first dot, second dot, third dot and the fourth dot, around the face and then we're just going to wrap it in a border. We are just using the response Clarifai's API gives us, the coordinates of the face in the picture. \
Finally:
- Quick Sign In / Register Form using [tachyons](https://tachyons.io/components/forms/sign-in/index.html). 

### **Some resources:**

- [Particles.js](https://vincentgarreau.com/particles.js/) interactive background
- [CSS Patterns Galerry](http://projects.verou.me/css3patterns/)
- [AI Face Detection Model](https://www.clarifai.com/models/ai-face-detection)
- [Tachyons](https://tachyons.io/)
- [React Tilt](https://awesomeopensource.com/project/jonathandion/react-tilt)

*Currently working on **Back-End Server**(Node.js) and **Database**.* 
*Repo will be updated with Back-End part in the future..*
