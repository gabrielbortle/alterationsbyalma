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
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' }),
    };
  }

  // Handle POST requests (form submission)
  if (event.httpMethod === 'POST') {
    const { name, email, phone, services, message } = JSON.parse(event.body);

    // Check for required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, and message are required' }),
      };
    }

    try {
      // Create a Nodemailer transporter with hardcoded SMTP settings
      const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Replace with your SMTP host
        port: 465, // Secure SSL port
        secure: true, // Use SSL
        auth: {
          user: process.env.SMTP_USER, // Use environment variable for email
          pass: process.env.SMTP_PASS, // Use environment variable for password
        },
      });

      // Send the email asynchronously
      await transporter.sendMail({
        from: process.env.SMTP_USER, // Use environment variable for email
        to: process.env.SMTP_USER, // Send to the same email address (can be changed)
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
        headers,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }
  }

  // Return error for unsupported methods
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Method Not Allowed' }),
  };
};
