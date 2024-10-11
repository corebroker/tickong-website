import React from 'react';
import { Calendar, Ticket, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6">Revolutionize Your Event Ticketing</h2>
        <p className="text-xl mb-8">Streamline your ticket sales and marketing with Tickong Services</p>
        <Link to="/services" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">Get Started</Link>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Tickong Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="mx-auto mb-4 text-blue-600" size={48} />
              <h4 className="text-xl font-semibold mb-2">Easy Event Management</h4>
              <p className="text-gray-600">Create and manage events with our intuitive platform</p>
            </div>
            <div className="text-center">
              <Ticket className="mx-auto mb-4 text-blue-600" size={48} />
              <h4 className="text-xl font-semibold mb-2">Seamless Ticketing</h4>
              <p className="text-gray-600">Sell tickets effortlessly with our secure payment system</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h4 className="text-xl font-semibold mb-2">Targeted Marketing</h4>
              <p className="text-gray-600">Reach the right audience with our marketing tools</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-blue-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">Ready to boost your ticket sales?</h3>
            <p className="text-xl mb-4 md:mb-0">Join Tickong Services today and take your events to the next level!</p>
          </div>
          <Link to="/services" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;