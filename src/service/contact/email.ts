import nodemailer from "nodemailer";

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER, // generated ethereal user
    pass: process.env.AUTH_PASS, // generated ethereal password
  },
});

export async function sendEmail({ from, subject, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[ALOG] ${subject}`,
    from,
    html: `
      <h2>${subject}</h2>
      <div>
        <p>
          ${message}
        </p>
      </div>
      <br/>
      <p>From: ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
