import React from 'react';
import { FacebookIcon, InstagramIcon, TwitchIcon, TwitterIcon } from './icons/SocialIcons.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitchIcon size={24} /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon size={24} /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon size={24} /></a>
            <a href="https://www.facebook.com/?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon size={24} /></a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Li Feng. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          This is a clone website created for demonstration purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;