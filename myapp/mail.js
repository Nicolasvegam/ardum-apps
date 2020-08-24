var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.ardum.cl',
  secure: true,
  port: 465,
  auth: {
    user: 'bot@ardum.cl',
    pass: '#######' 
  }, tls: {
    rejectUnauthorized: false
  }
});

transporter.sendEMail = function (mailRequest) {
  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailRequest, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve("The message was sent!");
      }
    });
  });
}

module.exports = transporter;
