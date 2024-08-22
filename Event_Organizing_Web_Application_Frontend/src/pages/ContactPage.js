import React from 'react';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import Button from '../components/UI/Button';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

     
      <div className="flex flex-col p-2 max-w-3xl mx-auto mb-4 lg:pl-10">
        <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4 text-left">Contact Us</h1>
        <p className="mb-3 lg:mb-5 text-lg lg:text-xl text-left">
          We’d love to hear from you! Please fill out the form below or use the contact information to get in touch with us.
        </p>

        <form className="space-y-3 lg:space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block text-lg lg:text-xl font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 lg:p-2.5 text-md lg:text-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg lg:text-xl font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 lg:p-2.5 text-md lg:text-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg lg:text-xl font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 lg:p-2.5 text-md lg:text-lg"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg lg:text-xl font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 lg:p-2.5 text-md lg:text-lg"
              required
            ></textarea>
          </div>

          <Button type="submit" className="w-full text-md lg:text-xl">Submit</Button>
        </form>
      </div>

     
      <div className="flex flex-col lg:flex-row lg:space-x-48 bg-gray-100 p-2 flex-grow lg:pl-6 lg:pr-12">
        <div className="flex-1 lg:flex-initial lg:mr-4 mb-3 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">Contact Information</h2>
          <p className="text-sm lg:text-base">Phone: (123) 456-7890</p>
          <p className="text-sm lg:text-base">Email: EventOrganizer@gmail.com</p>
          <p className="text-sm lg:text-base">Address: 1234 Elm Street, Suite 567 Springfield, IL 62704 USA</p>
        </div>

        <div className="flex-1 lg:flex-initial lg:mx-4 mb-3 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">Our Location</h2>
          <iframe
            className="mt-2 w-full h-24 lg:h-32 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1144.740013051951!2d-89.6492610073065!3d39.80172173179708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b8a0b4f53078d%3A0x3a8e579e2d9e9a4b!2s1234%20Elm%20St%2C%20Springfield%2C%20IL%2062704%2C%20USA!5e0!3m2!1sen!2sin!4v1623145828166!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Google Map showing our location"
          ></iframe>
        </div>

        <div className="flex-1 lg:flex-initial lg:ml-4 mb-3 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">Follow Us</h2>
          <ul className="flex flex-wrap lg:flex-nowrap lg:space-x-3">
            <li className="mb-1 lg:mb-0">
              <a href="https://facebook.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/facebook.png" alt="Facebook" className="w-4 h-4 lg:w-6 lg:h-6" /> Facebook
              </a>
            </li>
            <li className="mb-1 lg:mb-0">
              <a href="https://twitter.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/twitter.png" alt="Twitter" className="w-4 h-4 lg:w-6 lg:h-6" /> Twitter
              </a>
            </li>
            <li className="mb-1 lg:mb-0">
              <a href="https://instagram.com" className="text-blue-600" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/instagram.png" alt="Instagram" className="w-4 h-4 lg:w-6 lg:h-6" /> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 lg:flex-initial lg:ml-4 mb-3 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3">Business Hours</h2>
          <p className="text-sm lg:text-base">Mon - Fri: 9 AM - 5 PM</p>
          <p className="text-sm lg:text-base">Sat: 10 AM - 2 PM</p>
          <p className="text-sm lg:text-base">Sun: Closed</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
