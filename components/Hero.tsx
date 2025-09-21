import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://github.com/taikaishin/CelebrityDemo/blob/main/Celebrity_Hero.png?raw=true')" }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider animate-fade-in-down">
          Welcome
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-light tracking-widest animate-fade-in-up">
          To my official website
        </p>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
       </div>
    </section>
  );
};

export default Hero;