// api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up the transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ahsanullahfarooqi73@gmail.com',
        pass: 'opqk jtqq eliz uppj',
      },
    });

    const mailOptions = {
      from: email,
      to: 'ahsanullahfarooqi73@gmail.com',
      subject: `New message from ${name}`,
      text: `You have a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error sending email. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
