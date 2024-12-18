import React, { useState } from "react";
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send the email goes here, e.g., calling an API endpoint or emailJS
    console.log("Form submitted with data:", formData);
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

      <label htmlFor="message">Your Messages</label>
      <textarea
        id="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about yourself! Any Questions? Any Custom Jobs?"
        required
      ></textarea>

      <input type="submit" value="SEND" className="sendBtn" />
    </form>
  );
};

export default ContactForm;
