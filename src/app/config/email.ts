import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "osdouadi@gmail.com",
    pass: "thazpxbcrxlyernm",
  },
});

export const mailOptions = {
  from: "osdouadi@gmail.com",
  to: "osdouadi@gmail.com",
};
