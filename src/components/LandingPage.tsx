import React, { useState } from 'react';
import { TrendingUp, Shield, LineChart, X, Users, ChevronDown, ChevronUp, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StockTicker } from './StockTicker';
import { MarketPerformers } from './MarketPerformers';

interface StockNews {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FeatureModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ title, description, isOpen, onClose }) => {
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

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose, email }) => {
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
        <h3 className="text-2xl font-bold mb-4">Thanks for Subscribing!</h3>
        <p className="text-gray-600 mb-6">
          We've sent a confirmation email to <strong>{email}</strong>. 
          Please check your inbox to complete the subscription process.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Real-Time Analytics",
    description: "Track your investments with live market data and comprehensive analytics.",
    details: "Our real-time analytics platform provides institutional-grade market data, advanced charting tools, and comprehensive portfolio analysis. Monitor market movements, track performance metrics, and receive instant alerts on price changes and market events. With machine learning-powered insights and predictive analytics, make informed investment decisions backed by data."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Portfolio",
    description: "Your investment data is protected with enterprise-grade security.",
    details: "We employ military-grade encryption and multi-factor authentication to ensure your financial data remains secure. Our systems are regularly audited by leading cybersecurity firms, and we maintain compliance with global financial regulations. Your privacy and security are our top priorities."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Advanced Charts",
    description: "Visualize market trends with our powerful charting tools.",
    details: "Access professional-grade charting tools with over 100+ technical indicators, drawing tools, and customizable layouts. Our charts feature real-time data updates, multiple timeframes, and advanced study tools. Compare multiple assets, analyze historical patterns, and identify trading opportunities with ease."
  }
];

const stats = [
  { value: "3.4M+", label: "Active Users" },
  { value: "$18B+", label: "Assets Managed" },
  { value: "98%", label: "Client Retention" },
  { value: "150+", label: "Countries Served" }
];

const investmentStrategies = [
  {
    title: "Growth Portfolio",
    description: "High-potential stocks focused on long-term capital appreciation",
    image: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    returnRate: "+12.8% avg. annual return"
  },
  {
      title: "Dividend Income",
      description: "Stable companies with history of regular dividend payments",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      returnRate: "+8.4% avg. annual return"
  },
  {
    title: "Global Diversification",
    description: "Balanced exposure to international markets and sectors",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGdsb2JhbCUyMGZpbmFuY2V8ZW58MHx8fHwxNjkzNzM2NzYz&ixlib=rb-1.2.1&q=80&w=400", 
    returnRate: "+10.2% avg. annual return"
  }
];

const mockTestimonials = [
  {
    id: "1",
    name: "John Doe",
    role: "Software Engineer",
    quote: "Investura has completely transformed the way I manage my investments. Highly recommended!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Financial Analyst",
    quote: "The tools and insights provided by Investura are unparalleled. A must-have for any serious investor.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "Entrepreneur",
    quote: "Thanks to Investura, I feel more confident about my financial future. It's a game-changer!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
  }
];

const faqItems = [
  {
    question: "How does Investura protect my financial data?",
    answer: "We implement bank-level encryption, multi-factor authentication, and regular security audits. Your data is stored on secure servers with 24/7 monitoring and automatic backup systems."
  },
  {
    question: "What fees does Investura charge?",
    answer: "Investura offers transparent pricing with no hidden fees. Our basic plan starts at $9.99/month with access to core features. Premium plans include additional tools and personalized advisory services."
  },
  {
    question: "Can I transfer my existing portfolio?",
    answer: "Yes, Investura supports seamless portfolio transfers from most major brokerages. Our dedicated support team will guide you through the process, which typically takes 3-5 business days."
  },
  {
    question: "How accurate are the investment recommendations?",
    answer: "Our recommendations use advanced algorithms analyzing thousands of data points, historical trends, and market conditions. While no investment is guaranteed, our approach has outperformed market averages by 8% annually."
  }
];

const mockNews: StockNews[] = [
  {
    id: "1",
    title: "Tech Stocks Rally as Market Sentiment Improves",
    description: "Major technology companies lead market gains as investor confidence returns amid positive economic data.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHRlY2h8ZW58MHx8fHwxNjkzNzM2NzYz&ixlib=rb-1.2.1&q=80&w=500", 
  },
  {
    id: "2",
    title: "Global Markets React to Economic Policy Changes",
    description: "International markets show mixed reactions as central banks adjust monetary policies.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG1hcmtldHxlbnwwfHx8fDE2OTM3MzY3NjM&ixlib=rb-1.2.1&q=80&w=500", 
  },
  {
    id: "3",
    title: "Renewable Energy Sector Sees Record Investment",
    description: "Clean energy stocks surge as governments worldwide increase focus on sustainable initiatives.",
    image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHJlbmV3YWJsZXxlbnwwfHx8fDE2OTM3MzY3NjM&ixlib=rb-1.2.1&q=80&w=500", 
  }
];

export const LandingPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [subscriptionEmail, setSubscriptionEmail] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', subscriptionEmail);
    setShowSubscriptionModal(true);
  };

  return (
    <div className="space-y-16 py-8">
      <StockTicker />
      
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-50 blur-3xl -z-10"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Smart Investing for the
              <span className="text-blue-600"> Digital Age</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 mb-8">
              Track, analyze, and optimize your investment portfolio with professional-grade tools and real-time market data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/signup" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Investment Dashboard" 
                className="relative rounded-2xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Performers */}
      <MarketPerformers />

      {/* Features */}
      <section className="bg-gradient-to-b from-gray-50 to-white rounded-2xl">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Investura</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Experience the difference with tools designed by investors, for investors</p>
          <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer transform transition-transform hover:scale-105 border border-gray-100"
            onClick={() => setSelectedFeature(feature.title)}
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
          {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
            <button className="mt-4 text-blue-600 font-medium flex items-center">
          Learn more
          <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-600 text-white rounded-2xl">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Growing With You</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Investment Strategies</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Curated investment approaches designed to meet your financial goals</p>
          <div className="grid md:grid-cols-3 gap-8">
        {investmentStrategies.map((strategy, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
            <div className="relative">
          <img src={strategy.image} alt={strategy.title} className="w-full h-48 object-cover" />
          <div className="absolute bottom-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-medium">
            {strategy.returnRate}
          </div>
            </div>
            <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
          <p className="text-gray-600 mb-4">{strategy.description}</p>
          <Link to="/strategies" className="text-blue-600 hover:text-blue-700 font-medium">
            Explore strategy →
          </Link>
            </div>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Market News */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Latest Market News</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mockNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <Link
                  to={`/news/${news.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 rounded-2xl">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
          </div>
          <p className="text-gray-600 mb-12 max-w-3xl">Join thousands of satisfied investors who've transformed their financial future</p>
          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.163L12 18.897l-7.334 3.863 1.4-8.163-5.934-5.787 8.2-1.192z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">Find answers to common questions about Investura</p>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-blue-600 text-white py-16 rounded-2xl">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">Subscribe to our newsletter for the latest investment insights and updates</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-auto"
              value={subscriptionEmail}
              onChange={(e) => setSubscriptionEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Feature Modal */}
      {features.map((feature) => (
        <FeatureModal
          key={feature.title}
          title={feature.title}
          description={feature.details}
          isOpen={selectedFeature === feature.title}
          onClose={() => setSelectedFeature(null)}
        />
      ))}

      {/* Subscription Modal */}
      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        email={subscriptionEmail}
      />
    </div>
  );
};