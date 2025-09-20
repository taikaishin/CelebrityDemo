import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ProfileSection from './components/ProfileSection';
import KruSection from './components/KruSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { GalleryItem } from './types';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="bg-brand-dark text-white font-sans">
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <ProfileSection />
        <KruSection />
        <GallerySection onImageSelect={setSelectedImage} />
      </main>
      <Footer />
      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default App;