const express = require("express");
const app = express();
const port = 8080;

// Static Files
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'))
app.use('/img',express.static(__dirname+'public/img'))
app.use('/js',express.static(__dirname+'public/js'))

app.set("view engine", "ejs");

const { FieldValue } = require('firebase-admin/firestore');
const { db } = require('./models/firebase.js');


const { signinController } = require("./controllers/signinController.js");
const { signupController } = require("./controllers/signupController.js");

app.get("/",(req, res) => {
    res.render('auth/signin')
  });
  
  app.get("/signin", (req, res) => {
    res.render("auth/signin");
  });

  app.get("/signinSubmit",signinController);


  app.get("/signinSubmit",signinController)

app.get("/signup", (req, res) => {
  res.render("auth/signup");
});

app.get("/signUpSubmit",signupController)


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
