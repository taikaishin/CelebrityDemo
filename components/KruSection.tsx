import React from 'react';

const KruSection: React.FC = () => {
  return (
    <section id="show" className="relative py-40 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_PlayScene.png?raw=true')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-5xl font-black uppercase tracking-wider">LI FENG'S TV SHOW</h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-200">
          Step into the world of Li Feng's latest blockbuster TV series, 'Crimson Echo.' Get exclusive behind-the-scenes looks, interviews with the cast, and explore the universe of this critically acclaimed drama.
        </p>
        <a 
          href="https://www.youtube.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-brand-blue text-white font-bold uppercase tracking-wider py-3 px-8 rounded-md hover:bg-opacity-80 transition-all transform hover:scale-105"
        >
          Watch Now
        </a>
      </div>
    </section>
  );
};

export default KruSection;