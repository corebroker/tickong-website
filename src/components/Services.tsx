import React from 'react';
import { Calendar, Ticket, Users, BarChart, Globe, Shield } from 'lucide-react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Calendar className="text-blue-600" size={48} />}
          title="Event Management"
          description="Create and manage events with ease using our intuitive platform. From small gatherings to large conferences, we've got you covered."
        />
        <ServiceCard
          icon={<Ticket className="text-blue-600" size={48} />}
          title="Ticket Sales"
          description="Sell tickets effortlessly with our secure and user-friendly ticketing system. Customize ticket types, prices, and availability."
        />
        <ServiceCard
          icon={<Users className="text-blue-600" size={48} />}
          title="Audience Targeting"
          description="Reach the right audience with our advanced marketing tools. Segment your audience and create targeted campaigns to boost ticket sales."
        />
        <ServiceCard
          icon={<BarChart className="text-blue-600" size={48} />}
          title="Analytics & Reporting"
          description="Gain valuable insights into your event performance with our comprehensive analytics and reporting tools."
        />
        <ServiceCard
          icon={<Globe className="text-blue-600" size={48} />}
          title="Multi-channel Promotion"
          description="Promote your events across multiple channels, including social media, email, and partner networks, to maximize visibility."
        />
        <ServiceCard
          icon={<Shield className="text-blue-600" size={48} />}
          title="Fraud Prevention"
          description="Protect your events and attendees with our advanced fraud prevention measures and secure ticketing technology."
        />
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Services;