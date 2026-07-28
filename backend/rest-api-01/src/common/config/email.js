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

const sendVerificationEmail = async (
  email,
  token,
  subject = "Verification Email",
) => {
  await transporter.sendMail({
    from: `${process.env.SMTP_FROM_EMAIL}`,
    to: email, // to
    subject,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <title>Email Verification</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px;">
          <h2 style="color: #333;">Verify Your Email</h2>

          <p>Hello,</p>

          <p>
            Thank you for registering. Please use the verification code below to
            verify your email address.
          </p>

          <div style="text-align: center; margin: 30px 0;">
            <span
              style="
                display: inline-block;
                padding: 15px 30px;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 4px;
                background: #007bff;
                color: #ffffff;
                border-radius: 6px;
              "
            >
              ${token}
            </span>
          </div>

          <p>If you did not create this account, you can safely ignore this email.</p>

          <p>Thanks,<br>Your Team</p>
        </div>
      </body>
      </html>
    `,
  });
  console.log("Email sent");
};

export { sendMail, sendVerificationEmail };
