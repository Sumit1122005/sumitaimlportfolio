import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configure the transporter with standard Gmail settings.
    // The user needs to add their own EMAIL_USER and EMAIL_PASS to .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'sumitkumarpatel01122005@gmail.com',
        pass: process.env.EMAIL_PASS || 'your_app_password_here',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'sumitkumarpatel01122005@gmail.com',
      to: 'sumitkumarpatel01122005@gmail.com', // Sending the email to your address
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
