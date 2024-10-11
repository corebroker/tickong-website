import React from 'react';
import { Award, Users, Globe } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">About Tickong Services</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          Tickong Services is a leading ticket marketing platform dedicated to revolutionizing the way events are promoted and tickets are sold. With our innovative technology and customer-centric approach, we empower event organizers to reach wider audiences and streamline their ticketing processes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Stat icon={<Award size={32} />} value="10+" label="Years of Experience" />
          <Stat icon={<Users size={32} />} value="1M+" label="Happy Customers" />
          <Stat icon={<Globe size={32} />} value="50+" label="Countries Served" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg mb-8">
          Our mission is to connect people with unforgettable experiences by providing a seamless platform for event discovery, ticket purchasing, and event management. We strive to make the process of organizing and attending events as effortless and enjoyable as possible.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
        <ul className="list-disc list-inside text-lg mb-8">
          <li>Cutting-edge ticketing technology</li>
          <li>Comprehensive event management tools</li>
          <li>Powerful marketing and promotion features</li>
          <li>Dedicated customer support</li>
          <li>Secure and reliable platform</li>
        </ul>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-2 text-blue-600">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default About;