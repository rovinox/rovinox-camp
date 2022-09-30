"use strict";
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { emailTemplate } = require("../email/emailTemplate");
module.exports = {
  sendEmail: async (req, res) => {
    const { email, firstName, lastName, course } = req.body;
    const applicantEmail = email;
    console.log("applicantEmail: ", email, firstName, lastName, course);

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(
      sendGridTransport({
        auth: { api_key: process.env.API_KEY },
      })
    );
    try {
      let info = await transporter.sendMail({
        from: "neajmahmud.dev@gmail.com", // sender address
        to: applicantEmail, // list of receivers
        subject: "We Have Received Your Application", // Subject line
        //text: "Hello world?", // plain text body
        html: emailTemplate(firstName, course), // html body
      });
      //send mail with defined transport object
      console.log("Message sent: %s", info.message);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (err) {
      console.log(err);
    }
  },
};
