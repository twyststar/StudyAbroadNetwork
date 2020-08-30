const nodemailer = require('nodemailer');
const env = require('dotenv').config();


// build the email 
exports.buildMail = function(dataFromRoute){
  return new Promise(function(resolve, reject){
    let builtHtml = buildHtml(dataFromRoute)

  let emailToSend = {
    rejectUnauthorized:false,
    from: "studyabroaddevelopment@gmail.com", // sender address
    to: "studyabroaddevelopment@gmail.com", "alexandra@studyabroadnetwork.net", // list of receivers
    subject: "New Inquiry From " + dataFromRoute.inputLastName +", " + dataFromRoute.inputFirstName, // Subject line
    text: "Test Text", // plain text body
    html: builtHtml // html body
  }
  // console.log('in build email ' + JSON.stringify((emailToSend)))
    resolve(sendMail(emailToSend))
  })
}

buildHtml = function(data){
  var d = new Date,
    dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes()].join(':');
  let html =
  `<body style='padding: 5%;'>
  <h3>Contact Form Submitted</h3>
  <p>${dformat}</p>
  <br>
  <p style='font-size: 1.5em; font-weight: bold;'> ${data.inputLastName}, ${data.inputFirstName}</p>
  <p style='font-size: 1.5em; font-weight: italic;'> ${data.inputEmail}</p>
  <br>
  <div style='border:1px solid #0a3170;padding: 5%; width: 70%'>
    <label >From: </label>
    <p>${data.inputCity}, ${data.inputCountry}</p>
    <br>
    <label>Age: </label>
    <p>${data.inputAge}</p>
    <br>
    <label>Grade/Year: </label>
    <p>${data.inputGrade}</p>
    <br>
    <label>Would like to start: </label>
    <p>${data. inputStartMonth}, ${data.inputStartYear}</p>
    <label>Would like to stay for: </label>
    <p>${data.inputDuration}</p>
    <br>
    <label>Interested In: </label>
    <p>${data.countrySelectionInput}</p>
    <br>
    <label>Additional Notes from ${data.inputFirstName}: </label>
    <blockquote>${data.aboutInfo}</blockquote>
    <br>
  </div>
</body>`
  return(html)
}

//send the email
sendMail = function(emailObject){
  async function main() {
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
    let info = await transporter.sendMail(emailObject);
    // console.log("Message sent: %s", info.messageId);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
}

module.exports = exports;