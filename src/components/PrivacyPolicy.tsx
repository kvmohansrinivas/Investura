import { useState } from 'react';
import { Shield, Lock, Eye, Database, Globe, Bell, MessageSquare } from 'lucide-react';

export const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "collection",
      title: "Data Collection",
      icon: <Database className="w-5 h-5 mr-2" />,
      content: `We collect several types of information from and about users of our platform, including:
        • Personal identifiers such as name, email address, and phone number when you create an account.
        • Financial information including investment preferences, portfolio data, and transaction history.
        • Usage data such as how you interact with our platform, features you use, and time spent on various pages.
        • Device information including your IP address, browser type, operating system, and device identifiers.`
    },
    {
      id: "use",
      title: "How We Use Your Data",
      icon: <Eye className="w-5 h-5 mr-2" />,
      content: `Your data helps us provide and improve our services in the following ways:
        • To provide personalized investment recommendations and portfolio analysis.
        • To process transactions and maintain your account records.
        • To communicate with you about account activity, security updates, and promotional offers.
        • To analyze usage patterns and optimize our platform's performance and user experience.
        • To comply with financial regulations and legal obligations.`
    },
    {
      id: "sharing",
      title: "Data Sharing",
      icon: <Globe className="w-5 h-5 mr-2" />,
      content: `We may share your information with:
        • Financial partners necessary to process transactions and provide market data.
        • Service providers who assist us in operating our platform and conducting business.
        • Legal authorities when required by law or to protect our rights and safety.
        • We do not sell your personal information to third parties for marketing purposes.`
    },
    {
      id: "security",
      title: "Data Security",
      icon: <Lock className="w-5 h-5 mr-2" />,
      content: `We implement industry-standard security measures to protect your data:
        • End-to-end encryption for all sensitive financial and personal information.
        • Regular security audits and vulnerability testing.
        • Multi-factor authentication options for account access.
        • Employee training on privacy and security best practices.
        • Data breach notification protocols in compliance with applicable laws.`
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      icon: <Shield className="w-5 h-5 mr-2" />,
      content: `Our platform uses cookies and similar technologies:
        • Essential cookies: Required for platform functionality and security.
        • Analytical cookies: Help us understand how visitors interact with our platform.
        • Preference cookies: Remember your settings and personalize your experience.
        • Marketing cookies: Used to deliver relevant advertisements and track their effectiveness.
        • You can manage cookie preferences through your browser settings.`
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: <Bell className="w-5 h-5 mr-2" />,
      content: `Depending on your location, you may have the following rights:
        • Right to access and receive a copy of your personal data.
        • Right to correct inaccurate information.
        • Right to delete your personal data.
        • Right to restrict or object to our processing of your data.
        • Right to data portability.
        • Right to withdraw consent at any time.
        • To exercise these rights, contact us using the information provided below.`
    },
    {
      id: "contact",
      title: "Contact Us",
      icon: <MessageSquare className="w-5 h-5 mr-2" />,
      content: `If you have questions or concerns about our Privacy Policy or data practices:
        • Email: privacy@investura.com
        • Phone: (123) 456-7890
        • Mail: Investura Privacy Office, 123 Main Street, Anytown, CA 12345
        • We aim to respond to all inquiries within 48 business hours.`
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100">
            Last Updated: January 15, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="p-8 border-b">
          <p className="text-gray-700 leading-relaxed">
            At Investura, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you use our investment platform. 
            Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="p-8 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className="flex items-center text-left w-full px-4 py-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                >
                  {section.icon}
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Sections */}
        <div className="p-8">
          {sections.map(section => (
            <div 
              key={section.id} 
              id={section.id}
              className={`mb-10 scroll-mt-20 ${activeSection === section.id ? 'bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 transition-all' : ''}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mr-3">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-8 bg-gray-50 border-t">
          <p className="text-gray-500 text-sm">
            By using Investura, you agree to the collection and use of information in accordance with this Privacy Policy.
            We may update this policy periodically, and will notify you of significant changes.
          </p>
        </div>
      </div>
    </div>
  );
};
