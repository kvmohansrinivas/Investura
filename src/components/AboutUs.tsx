import React, { useState } from 'react';
import { Shield, Users, Trophy, Target, X } from 'lucide-react';

interface ValueModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const ValueModal: React.FC<ValueModalProps> = ({ title, description, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const AboutUs: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      bio: "Former Wall Street executive with 15+ years of experience in financial markets."
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      bio: "Certified Financial Analyst with expertise in portfolio management and risk assessment."
    },
    {
      name: "Emily Thompson",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      bio: "Tech innovator specializing in fintech solutions and data analytics."
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Security",
      description: "Your financial security is our top priority. We employ bank-level security measures.",
      details: "We utilize state-of-the-art encryption protocols and multi-factor authentication to ensure your financial data remains secure. Our systems are regularly audited by independent security firms, and we maintain compliance with all major financial regulations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client First",
      description: "Every decision we make is centered around providing value to our clients.",
      details: "Our client-first approach means we prioritize your success above all else. We provide 24/7 support, personalized investment strategies, and transparent fee structures. Your goals become our goals, and we work tirelessly to help you achieve them."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service.",
      details: "Excellence is not just a goal; it's our standard operating procedure. From our cutting-edge technology to our expert financial advisors, we maintain the highest standards in the industry. We continuously invest in our people and systems to deliver superior results."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "Continuously evolving our platform with cutting-edge technology.",
      details: "Innovation drives everything we do. We leverage artificial intelligence and machine learning to provide smarter investment insights. Our research team constantly explores new technologies and methodologies to give you the edge in today's dynamic markets."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Mission
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Investura, we're dedicated to democratizing financial markets by providing professional-grade investment tools to everyone. Our platform combines cutting-edge technology with user-friendly design to help you make informed investment decisions.
        </p>
      </section>

      {/* Values */}
      <section className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedValue(value.title)}
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Modal */}
      {values.map((value) => (
        <ValueModal
          key={value.title}
          title={value.title}
          description={value.details}
          isOpen={selectedValue === value.title}
          onClose={() => setSelectedValue(null)}
        />
      ))}
    </div>
  );
};