import React, { useCallback, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ContentWrapper from '../components/contentWrapper/ContentWrapper';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    message: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === 'phoneNo' && (value.length > 10 || !/^\d*$/.test(value))) {
      return; // Ensures only digits and max 10 characters for phoneNo
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const { firstName, lastName, email, phoneNo, message } = formData;
    if (!firstName) {
      toast.error('First Name is required');
      return false;
    }
    if (firstName.length > 15 || lastName.length > 15) {
      toast.error(`${firstName.length > 15 ? 'First' : 'Last'} Name should not exceed 15 characters.`);
      return false;
    }

    if (!email) {
      toast.error('Email is required');
      return false;
    }
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    if (!phoneNo) {
      toast.error('Phone Number is required');
      return false;
    }
    if (phoneNo.length !== 10) {
      toast.error('Phone number must be exactly 10 digits.');
      return false;
    }
    if (!message) {
      toast.error('Message is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://shree-devansh.vercel.app/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success('Form submitted successfully!!!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            message: '',
          });
        } else {
          const errorData = await response.json();
          toast.error(errorData.msg || 'An error occurred. Please try again.');
        }
      } catch (error) {
        toast.error('Server Error. Please try again later.', error);
      }
    }
  };

  return (
    <div className="main-container py-24 bg-[#f4f0ea]">
      <ContentWrapper>
        <ToastContainer limit={5} />
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">We&apos;d love to hear from you. Get in touch with us!</p>
        </div>

        <div className="details mt-10 flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Side - Location/Details */}
          <div className="location-info text-gray-600 text-base leading-relaxed md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Office</h2>
            <p>Jain bhawan, Gandhibagh, </p>
            <p>Nagpur, Maharashtra 440002</p>
            <p className="mt-2">Phone: 07770016366</p>

            {/* Google Maps Iframe */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.984556342039!2d79.10280317437199!3d21.1530128805276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1804bf9e6bd%3A0x3e5bc8b92de01890!2sShree%20Devansh%20Copper%20Products!5e0!3m2!1sen!2sin!4v1729185476476!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="shadow-lg rounded-lg p-8 w-full md:w-1/2 bg-white" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Send us a Message</h2>

            <div className="mb-6 flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phoneNo" className="block  text-sm font-medium text-gray-700 mb-2">
                Phone No<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNo"
                className="w-full border text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                placeholder="Enter your phone number"
                value={formData.phoneNo}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                className="w-full text-black border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out transform"
                rows="4"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white font-semibold rounded-md py-2 px-4 shadow-md hover:bg-gray-700 transition duration-200 ease-in-out transform"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ContactUs;
