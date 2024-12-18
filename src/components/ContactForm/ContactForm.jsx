import React, { useState } from "react";
import './ContactForm.css';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: ""
  });

  const [status, setStatus] = useState(null); // To show success/error messages

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status before submission
    setStatus(null);

    console.log("Form submitted with data:", formData);

    try {
      // Make the API call to your backend to send the email
      const response = await axios.post('https://alterationsbyalma.netlify.app/.netlify/functions/send', formData); // Adjust this URL based on your actual backend endpoint

      if (response.status === 200) {
        console.log('Email sent successfully:', response);
        setStatus({ type: 'success', message: 'Your message was sent successfully!' });
      }
    } catch (error) {
      console.error('Error sending email:', error.response?.data || error.message);
      setStatus({ type: 'error', message: 'There was an error sending your message. Please try again later.' });
    }

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: "",
      message: ""
    });
  };

  return (
    <form className="yourinfo" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Your Phone Number"
        required
      />

      <label htmlFor="services">What services are you interested in?</label>
      <input
        type="text"
        id="services"
        value={formData.services}
        onChange={handleChange}
        placeholder="Looking for anything specific?"
        required
      />

      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about yourself! Any Questions? Any Custom Jobs?"
        required
      ></textarea>

      <input type="submit" value="SEND" className="sendBtn" />

      {/* Display success or error messages */}
      {status && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
