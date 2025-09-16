"use client";
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { 
  FaWhatsapp, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaShare,
  FaCopy,
  FaTimes
} from 'react-icons/fa';

const SocialShare = ({ 
  url, 
  title, 
  description, 
  hashtags = '',
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Encode text for URLs
  const encodeText = (text) => encodeURIComponent(text);
  
  // Clean and limit text for sharing
  const cleanTitle = title?.substring(0, 100) || '';
  const cleanDescription = description?.substring(0, 190) + "..." || '';
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  // Social sharing URLs
  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodeText(`${cleanTitle}\n\n${cleanDescription}\n\n${currentUrl}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeText(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeText(currentUrl)}&text=${encodeText(cleanTitle)}&hashtags=${encodeText(hashtags)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeText(currentUrl)}`,
    instagram: currentUrl // Instagram doesn't support direct URL sharing
  };

  // Copy to clipboard function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast.success('Link copied to clipboard!');
      setIsOpen(false);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  // Handle social share
  const handleShare = (platform) => {
    if (platform === 'instagram') {
      // For Instagram, just copy to clipboard with instructions
      copyToClipboard();
      toast.info('Paste this link in your Instagram bio or story!');
      return;
    }
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    setIsOpen(false);
  };

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      color: 'bg-green-500 hover:bg-green-600',
      platform: 'whatsapp'
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      color: 'bg-blue-600 hover:bg-blue-700',
      platform: 'facebook'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      color: 'bg-blue-400 hover:bg-blue-500',
      platform: 'twitter'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      color: 'bg-blue-700 hover:bg-blue-800',
      platform: 'linkedin'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      platform: 'instagram'
    }
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg"
        aria-label="Share this service"
      >
        <FaShare className="w-4 h-4" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {/* Share Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share Panel */}
          <div className="absolute top-full right-0 mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 p-4 min-w-[300px] animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Share this service</h4>
                <p className="text-gray-400 text-xs line-clamp-2">{cleanTitle}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Close share menu"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
            
            {/* Social Platforms Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <button
                    key={platform.platform}
                    onClick={() => handleShare(platform.platform)}
                    className={`${platform.color} text-white p-3 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 text-sm font-medium`}
                    title={`Share on ${platform.name}`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{platform.name}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Copy Link */}
            <div className="border-t border-gray-700 pt-3">
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-all text-sm font-medium"
              >
                <FaCopy className="w-4 h-4" />
                Copy Link
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialShare;