import React, { useState, useEffect } from 'react';
import { FacebookIcon, InstagramIcon, TwitchIcon, TwitterIcon } from './icons/SocialIcons';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-black tracking-wider uppercase">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-brand-blue transition-colors">Li Feng</a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'News', 'Profile', 'Show', 'Gallery'].map((item) => {
              const href = item === 'Home' ? '#' : `#${item.toLowerCase()}`;
              return (
                <a 
                  key={item} 
                  href={href} 
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitchIcon /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="https://www.facebook.com/?locale=zh_TW" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;