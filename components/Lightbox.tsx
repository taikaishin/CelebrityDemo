import React, { useEffect } from 'react';
import { GalleryItem } from '../types';

interface LightboxProps {
  image: GalleryItem;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white hover:text-brand-blue transition-colors z-[110]"
        aria-label="Close image viewer"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div 
        className="relative flex flex-col lg:flex-row w-full max-w-screen-xl max-h-[90vh] bg-brand-gray/10 rounded-lg overflow-hidden shadow-2xl animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 lg:w-2/3 bg-black flex items-center justify-center p-2">
            <img src={image.src} alt="Enlarged gallery view" className="max-w-full max-h-[50vh] lg:max-h-[85vh] object-contain" />
        </div>
        <div className="lg:w-1/3 bg-black/50 p-6 sm:p-8 overflow-y-auto">
            <h3 className="text-xl font-bold text-brand-blue mb-4">The Story Behind The Shot</h3>
            <p className="text-gray-300 leading-relaxed">{image.story}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;