import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import NewsSection from './components/NewsSection.tsx';
import ProfileSection from './components/ProfileSection.tsx';
import KruSection from './components/KruSection.tsx';
import GallerySection from './components/GallerySection.tsx';
import Footer from './components/Footer.tsx';
import Lightbox from './components/Lightbox.tsx';
import { GalleryItem } from './types.ts';

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