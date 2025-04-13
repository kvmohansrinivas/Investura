import { useState } from 'react';
import { FileText, AlertTriangle, FileCheck, CreditCard, UserCheck, Award, Scale, CheckCircle } from 'lucide-react';

export const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "agreement",
      title: "User Agreement",
      icon: <FileCheck className="w-5 h-5 mr-2" />,
      content: `By accessing or using Investura's platform, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
      
      These Terms constitute a legally binding agreement between you and Investura regarding your use of our investment platform and services. You must be at least 18 years old and have the legal capacity to enter into this agreement.`
    },
    {
      id: "account",
      title: "Account Responsibilities",
      icon: <UserCheck className="w-5 h-5 mr-2" />,
      content: `You are responsible for:
      • Maintaining the confidentiality of your account credentials.
      • All activities that occur under your account.
      • Ensuring your information is accurate, current, and complete.
      • Notifying us immediately of any unauthorized use of your account.
      
      We reserve the right to terminate accounts that violate our terms or policies, or remain inactive for extended periods. You may request to delete your account at any time, subject to any ongoing obligations.`
    },
    {
      id: "services",
      title: "Services and Fees",
      icon: <CreditCard className="w-5 h-5 mr-2" />,
      content: `Our services include:
      • Investment portfolio tracking and analysis
      • Market data and financial news
      • Investment recommendations and insights
      • Account management tools
      
      Fees for premium services are disclosed at sign-up and may change with 30 days' notice. Subscription charges are processed according to your selected billing cycle. Refunds are issued in accordance with applicable laws and our refund policy.`
    },
    {
      id: "content",
      title: "Content and Conduct",
      icon: <FileText className="w-5 h-5 mr-2" />,
      content: `You agree not to use our platform to:
      • Violate any applicable laws or regulations
      • Infringe on intellectual property rights
      • Upload harmful software or content
      • Impersonate others or misrepresent your affiliation
      • Collect user information without consent
      • Interfere with the proper functioning of the service
      
      We may remove content that violates these terms or investigate potential violations at our discretion.`
    },
    {
      id: "ip",
      title: "Intellectual Property",
      icon: <Award className="w-5 h-5 mr-2" />,
      content: `All content, features, and functionality on our platform—including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software—are the exclusive property of Investura or our licensors.
      
      Our platform is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our platform without express written consent.`
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5 mr-2" />,
      content: `To the maximum extent permitted by law, Investura shall not be liable for:
      • Any indirect, incidental, special, consequential, or punitive damages
      • Loss of profits, data, use, goodwill, or other intangible losses
      • Damages resulting from interruption of service or security breaches
      • Inaccuracies or errors in financial data or investment recommendations
      
      Our total liability for all claims related to these Terms shall not exceed the amount you paid for our services during the six months preceding the claim.`
    },
    {
      id: "governing",
      title: "Governing Law",
      icon: <Scale className="w-5 h-5 mr-2" />,
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of California without regard to its conflict of law provisions.
      
      Any dispute arising from these Terms shall be resolved exclusively in the courts located in San Francisco County, California. You consent to the personal jurisdiction and venue of these courts.`
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: <CheckCircle className="w-5 h-5 mr-2" />,
      content: `We reserve the right to modify these Terms at any time. We will provide notice of significant changes through:
      • Email notification to the address associated with your account
      • A prominent notice on our platform
      • An update to the "Last Updated" date at the top of these Terms
      
      Your continued use of our platform after such modifications constitutes your acceptance of the revised Terms.`
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-8">
          <div className="flex items-center mb-4">
            <FileText className="w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
          </div>
          <p className="text-indigo-100">
            Last Updated: January 15, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="p-8 border-b">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> Please read these Terms and Conditions carefully before using Investura's platform.
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions ("Terms") govern your access to and use of Investura's investment platform,
            including any content, functionality, and services offered through our website and mobile applications.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="p-8 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className="flex items-center text-left px-4 py-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-colors"
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="p-8">
          {sections.map(section => (
            <div 
              key={section.id} 
              id={section.id}
              className={`mb-10 scroll-mt-20 ${activeSection === section.id ? 'bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600 transition-all' : ''}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-3">
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

        {/* Contact Information */}
        <div className="p-8 bg-gray-50 border-t">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Email:</strong> legal@investura.com</li>
            <li><strong>Phone:</strong> (123) 456-7890</li>
            <li><strong>Mail:</strong> Investura Legal Department, 123 Main Street, Anytown, CA 12345</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="p-8 bg-indigo-50 border-t text-center">
          <p className="text-indigo-600 font-medium">
            By using Investura, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};
