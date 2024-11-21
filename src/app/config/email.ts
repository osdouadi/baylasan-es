import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alshebli.center@gmail.com",
    pass: "kikeklxaujhiwrsu",
  },
});

export const mailOptions = {
  from: "alshebli.center@gmail.com",
  to: "osdouadi@gmail.com",
};
