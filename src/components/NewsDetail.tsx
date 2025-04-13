import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, Bookmark, BookmarkCheck, MessageSquare, ChevronDown, ChevronUp, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export const NewsDetail: React.FC = () => {
  useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [showComments, setShowComments] = useState(false);
  const [showTOC, setShowTOC] = useState(false);
  
  const article = {
    title: "Tech Stocks Rally as Market Sentiment Improves",
    date: "March 15, 2025",
    author: "Financial Analyst Team",
    authorRole: "Senior Market Analyst",
    authorBio: "Our Financial Analyst Team consists of certified financial experts with over 15 years of market experience.",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
    readingTime: "4 min read",
    tags: ["Tech Stocks", "Market Rally", "Investments", "Financial Analysis"],
    content: `
      The technology sector experienced a significant upturn today as investor confidence showed marked improvement amid positive economic indicators and strong corporate earnings reports.

      Major tech companies led the market gains, with several key players posting double-digit percentage increases in their stock prices. This rally comes as a welcome relief for investors who have weathered recent market volatility.

      Market analysts attribute this positive trend to several factors:

      1. Strong Earnings Reports
      Several major tech companies exceeded earnings expectations, demonstrating resilience in their business models and continued growth potential.

      2. Economic Indicators
      Recent economic data suggests a stable growth environment, with inflation showing signs of moderation and consumer spending remaining robust.

      3. Innovation Pipeline
      Announcements of new products and services in artificial intelligence and cloud computing have renewed investor interest in the sector's growth potential.

      The broader implications of this rally extend beyond the technology sector, as it often serves as a bellwether for overall market sentiment and economic health.
    `
  };

  const sections = [
    { id: 'overview', title: 'Market Overview', position: 1 },
    { id: 'earnings', title: 'Strong Earnings Reports', position: 3 },
    { id: 'indicators', title: 'Economic Indicators', position: 4 },
    { id: 'innovation', title: 'Innovation Pipeline', position: 5 },
    { id: 'implications', title: 'Market Implications', position: 6 },
  ];

  const relatedArticles = [
    {
      id: '1',
      title: 'AI Revolution in Financial Markets',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=300&h=200&fit=crop',
      date: 'March 13, 2025'
    },
    {
      id: '2',
      title: 'Emerging Markets: Investment Opportunities',
      image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=300&h=200&fit=crop',
      date: 'March 10, 2025'
    },
    {
      id: '3',
      title: 'Sustainable Investing: The New Normal',
      image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=300&h=200&fit=crop',
      date: 'March 8, 2025'
    }
  ];

  const comments = [
    {
      id: '1',
      author: 'Jane Investor',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      date: 'March 15, 2025',
      content: 'This analysis provides valuable insights. I\'m particularly interested in how these trends might affect smaller tech companies in the ecosystem.',
      likes: 12
    },
    {
      id: '2',
      author: 'Robert Financial',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      date: 'March 15, 2025',
      content: 'Great overview. I\'d be curious to see how these patterns compare to previous market recoveries, especially in the context of changing interest rates.',
      likes: 8
    }
  ];

  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fontSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${article.title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${article.title}&body=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <article className="bg-white rounded-xl shadow-sm overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover"
        />
        
        <div className="p-8">
          {/* Article Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{article.title}</h1>
            
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              {isBookmarked ? 
                <BookmarkCheck className="w-5 h-5 text-blue-600" /> : 
                <Bookmark className="w-5 h-5 text-gray-400" />
              }
            </button>
          </div>
          
          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{article.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readingTime}</span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {article.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Text Size Controls */}
          <div className="flex items-center gap-2 mb-6 bg-gray-50 p-2 rounded">
            <span className="text-sm text-gray-500">Text size:</span>
            <button 
              onClick={() => handleFontSizeChange('small')}
              className={`px-2 py-1 rounded ${fontSize === 'small' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
            >
              A<span className="text-xs">A</span>
            </button>
            <button 
              onClick={() => handleFontSizeChange('medium')}
              className={`px-2 py-1 rounded ${fontSize === 'medium' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
            >
              A<span className="text-sm">A</span>
            </button>
            <button 
              onClick={() => handleFontSizeChange('large')}
              className={`px-2 py-1 rounded ${fontSize === 'large' ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-200'}`}
            >
              A<span className="text-base">A</span>
            </button>
          </div>
          
          {/* Social Media Sharing */}
          <div className="mb-8 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 mb-3">
              <Share2 className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 font-medium">Share this article:</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => handleShare('facebook')}
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleShare('twitter')}
                className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleShare('email')}
                className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
                aria-label="Share via Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Table of Contents Toggle */}
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="flex items-center justify-between w-full p-3 bg-gray-50 rounded mb-6 hover:bg-gray-100"
          >
            <span className="font-medium text-gray-700">Table of Contents</span>
            {showTOC ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {/* Table of Contents */}
          {showTOC && (
            <div className="p-4 bg-gray-50 rounded-md mb-6">
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="text-blue-600 hover:underline text-left"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Article Content */}
          <div className={`prose max-w-none ${fontSizeClasses[fontSize as keyof typeof fontSizeClasses]}`}>
            {article.content.split('\n\n').map((paragraph, index) => {
              if (index === 0) {
                return <p id="overview" key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
              } else if (paragraph.includes("1. Strong Earnings Reports")) {
                return <p id="earnings" key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
              } else if (paragraph.includes("2. Economic Indicators")) {
                return <p id="indicators" key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
              } else if (paragraph.includes("3. Innovation Pipeline")) {
                return <p id="innovation" key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
              } else if (index === article.content.split('\n\n').length - 1) {
                return <p id="implications" key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
              }
              
              return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
            })}
          </div>
          
          {/* Author Information */}
          <div className="mt-10 p-6 bg-blue-50 rounded-xl flex items-start gap-4">
            <img 
              src={article.authorAvatar} 
              alt={article.author} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-gray-800">{article.author}</h3>
              <p className="text-sm text-gray-600 mb-2">{article.authorRole}</p>
              <p className="text-sm text-gray-700">{article.authorBio}</p>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(relatedArticle => (
                <Link key={relatedArticle.id} to={`/news/${relatedArticle.id}`} className="group">
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title} 
                      className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600">{relatedArticle.title}</h3>
                      <p className="text-sm text-gray-500 mt-2">{relatedArticle.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Comments Section Toggle */}
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center justify-between w-full p-3 bg-gray-50 rounded mt-10 hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium text-gray-700">Comments ({comments.length})</span>
            </div>
            {showComments ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {/* Comments */}
          {showComments && (
            <div className="mt-6 space-y-6">
              {comments.map(comment => (
                <div key={comment.id} className="flex gap-4">
                  <img 
                    src={comment.avatar} 
                    alt={comment.author} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-900">{comment.author}</h4>
                      <span className="text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="text-sm text-gray-500 hover:text-blue-600">Reply</button>
                      <span className="text-sm text-gray-500">{comment.likes} likes</span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Comment Form */}
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Add your comment</h3>
                <textarea 
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  rows={4}
                  placeholder="Share your thoughts..."
                />
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Post Comment
                </button>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};