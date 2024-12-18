require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Define CORS headers to allow all origins
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow all origins (replace with your origin for more security)
    'Access-Control-Allow-Methods': 'OPTIONS, POST', // Allow OPTIONS (preflight) and POST methods
    'Access-Control-Allow-Headers': 'Content-Type', // Allow specific headers
  };

  // Handle preflight OPTIONS requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ message: 'CORS preflight successful' }),
    };
  }

  // Handle POST requests (form submission)
  if (event.httpMethod === 'POST') {
    const { name, email, phone, services, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: headers,
        body: JSON.stringify({ error: 'Name, email, and message are required' }),
      };
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
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
        headers: headers,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        headers: headers,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }
  }

  // Return error for unsupported methods
  return {
    statusCode: 405,
    headers: headers,
    body: JSON.stringify({ error: 'Method Not Allowed' }),
  };
};
