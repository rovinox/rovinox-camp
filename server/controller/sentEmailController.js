"use strict";
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const { emailTemplate } = require("../email/emailTemplate");
const { paymentTemplate } = require("../email/paymentTemplate");
const Batch = require("../model/batch");
const Student = require("../model/student");

module.exports = {
  sendEmail: async (req, res) => {
    const {
      email,
      firstName,
      lastName,
      batchId,
      message,
      phoneNumber,
      amount,
    } = req.body;

    const cardInfo = res.locals.cardInfo;

    const applicantEmail = email;
    let course = "";
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
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
      if (batchId) {
        const result = await Batch.findOne({ _id: batchId });
        course = result.course;
      }

      let info = await transporter.sendMail({
        from: "contact@rovinox.com", // sender address
        fromname: "Rovinox",
        to: [applicantEmail, "contact@rovinox.com"], // list of receivers
        subject: message
          ? "We Have Received Your Message"
          : amount
          ? "Receipt From Rovinox"
          : "We Have Received Your Application", // Subject line
        //text: "Hello world?", // plain text body
        html: amount
          ? paymentTemplate(cardInfo)
          : emailTemplate(
              capitalizeFirstLetter(firstName),
              course,
              message,
              phoneNumber
            ), // html body
      });
      // send mail with defined transport object
      console.log("Message sent: %s", info.message);
      res.status(200).json({ message: "Message sent" });
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      //  Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      //  Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (err) {
      console.log(err);
    }
  },
};
