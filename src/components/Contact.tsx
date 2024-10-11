import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-6">We'd love to hear from you. Please fill out the form below or use our contact information to reach us.</p>
          <div className="flex items-center mb-4">
            <Mail className="text-blue-600 mr-4" size={24} />
            <span>info@tickongservices.com</span>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="text-blue-600 mr-4" size={24} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="text-blue-600 mr-4" size={24} />
            <span>8206 Louisiana Blvd Ne, Ste A #4353, Albuquerque, New Mexico 87113 Us</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message here" rows={4}></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;