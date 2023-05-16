const nodemailer = require("nodemailer");
require("dotenv").config();

const { MAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "mail.ukr.net",
  port: 993,
  secure: true,
  auth: {
    user: "andriy.bartoshiv@ukr.net",
    pass: MAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "andriy.bartoshiv@ukr.net" };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEmail;
