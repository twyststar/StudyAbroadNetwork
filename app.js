const env = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const path = require('path');

var app = express();

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.resolve("./public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  console.log('in mail function')
  console.log(process.env.MAIL_USER);
  console.log(req.body);
  res.send("Success!   ");
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      rejectUnauthorized:false,
      from: "studyabroaddevelopment@gmail.com", // sender address
      to: "studyabroaddevelopment@gmail.com", // list of receivers
      subject: req.body.inputAddress, // Subject line
      text: "Test Text", // plain text body
      html: "<b> Testing html with input city: " + req.body.inputCity + "</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
});

var port = process.env.PORT || 3200;
app.listen(port, () => console.log("server started..."));

// async..await is not allowed in global scope, must use a wrapper

