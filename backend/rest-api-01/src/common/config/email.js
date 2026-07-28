import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.MAILTRAP_USERNAME,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

const sendMail = async (to, subject, html) => {
  await transporter.sendMail({
    from: `${process.env.SMTP_FROM_EMAIL}`,
    to,
    subject,
    html,
  });
};

const sendVerificationEmail = async (email, token) => {
  await transporter.sendMail({
    from: `${process.env.SMTP_FROM_EMAIL}`,
    email, // to
    subject,
    html=`Verify with token: ${token}`,
  });
};


export {sendMail, sendVerificationEmail}