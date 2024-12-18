require('dotenv').config(); // Load environment variables
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  console.log('Event Method:', event.httpMethod); // Log the method

  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust this to allow specific domains
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: "CORS preflight successful" }),
    };
  }

  // Handle POST request (sending email logic)
  if (event.httpMethod === 'POST') {
    const { name, email, phone, services, message } = JSON.parse(event.body);

    // Ensure all required fields are present
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name, email, and message are required' }),
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

      // Send the email
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER, // Send the email to the configured SMTP user
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Services: ${services}
          Message: ${message}
        `,
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }
  }

  // If it's not a POST or OPTIONS request, return Method Not Allowed
  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
};
