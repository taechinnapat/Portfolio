import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>I am ready to contact you through all channels as follows, you can contact me anytime.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:techinnapat@gmail.com" className="hover:underline">
                techinnapat@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>065-612-3565</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>5/32 Wong Sawang Rd., Wong Sawang Subdistrict, Bang Sue, Bangkok 10800</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-12 gap-6 text-3xl">
          <a href="https://www.facebook.com/tae.chinnapat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://github.com/taechinnapat" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
            <FaGithub />
          </a>
          <a href="mailto:techinnapat@gmail.com" className="hover:text-red-400 transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
