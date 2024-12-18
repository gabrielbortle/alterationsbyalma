require('dotenv').config(); // Load environment variables
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Handle only POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for testing
        "Access-Control-Allow-Methods": "POST, OPTIONS", // Allow only POST and OPTIONS methods
        "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
      },
    };
  }

  // Parse the incoming form data
  const { name, email, phone, services, message } = JSON.parse(event.body);

  // Ensure required fields are filled out
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Name, email, and message are required' }),
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for testing
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }

  try {
    // Set up the SMTP transporter using Hostinger's SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email to your email address
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // The recipient email address (this will send to your email)
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Services: ${services}
        Message: ${message}
      `,
    });

    // Return success message if email is sent
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for testing
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins for testing
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }
};
