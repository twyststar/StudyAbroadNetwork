const env = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const path = require('path');
const mailer = require('./helpers/mail-functions.js')

var app = express();

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.resolve("./public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.setHeader("Content-Security-Policy", "img-src 'self' https://www.studyabroadnetwork.net");
//   return next();
// });

app.get('/', (req, res) => {
  res.render('pages/index',
  {
    page_title: 'index'
  });
});
app.get('/canada', (req, res) => {
  res.render('pages/canada',
  {
    page_title: 'canada'
  });
});
app.get('/nz', (req, res) => {
  res.render('pages/nz',
  {
    page_title: "nz"
  });
});
app.get('/usa', (req, res) => {
  res.render('pages/usa',
  {
    page_title: "usa"
  });
});
app.get('/about', (req, res) => {
  res.render('pages/about',
  {
    page_title: "about"
  });
});
app.get('/fees', (req, res) => {
  res.render('pages/fees',
  {
    page_title: "fees"
  });
});
app.get('/agents', (req, res) => {
  res.render('pages/agents',
  {
    page_title: "agents"
  });
});
app.get('/contact', (req, res) => {
  res.render('pages/contact',
  {
    page_title: "contact"
  });
});

app.post("/contact", (req, res) => {
  mailer.buildMail(req.body).then(function(err, reply){
    if(err){
      console.log("Error in post send to mailer: " + err)
    } else {
      setTimeout(function(){
        res.render('pages/index',{
          page_title: 'index'
        })
      }, 10000)
    }
  })
});

var port = process.env.PORT || 3202;
app.listen(port, () => console.log("server started..."));

// async..await is not allowed in global scope, must use a wrapper

