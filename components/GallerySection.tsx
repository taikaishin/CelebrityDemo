import React from 'react';
import Section from './Section';
import { GalleryItem } from '../types';

interface GalleryImageProps {
  image: GalleryItem;
  onImageSelect: (image: GalleryItem) => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, onImageSelect }) => (
  <button 
    onClick={() => onImageSelect(image)}
    className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group block w-full focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-brand-dark"
    aria-label="View image in lightbox"
  >
    <img 
      src={image.src}
      alt="Gallery" 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>
  </button>
);

interface GallerySectionProps {
  onImageSelect: (image: GalleryItem) => void;
}


const GallerySection: React.FC<GallerySectionProps> = ({ onImageSelect }) => {
  const images: GalleryItem[] = [
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celebrity_Sport.png?raw=true',
      story: "Off the stage and onto the court, Li Feng demonstrates that discipline and passion know no bounds. A rare glimpse into a private training session reveals the focus that fuels every performance."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celebrity_Magazine_.png?raw=true',
      story: "Gracing the cover of 'Vogue,' Li Feng's latest feature delves into the evolution of their style and influence on modern fashion. The interview reveals a vulnerability and strength that continues to captivate the world."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celebrity_jump.png?raw=true',
      story: "A moment of pure, unscripted joy. This candid shot, taken between takes on a music video set, captures the boundless energy and infectious spirit that has made Li Feng a global icon."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celebrity_DrinkAD.png?raw=true',
      story: "As the new face of 'Aura Sparkling Water,' Li Feng brings their signature elegance and cool confidence to the brand's global campaign, celebrating natural vitality and refreshing authenticity."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_Fashion.png?raw=true',
      story: "A bold statement at Paris Fashion Week. Li Feng turns the sidewalk into a runway, showcasing a custom avant-garde piece that blends traditional motifs with futuristic design, setting trends for the season."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_Drama%20(2).png?raw=true',
      story: "In a climactic scene from the award-winning drama 'Crimson Echo,' Li Feng delivers a powerful, emotionally charged performance that critics are calling 'a masterclass in acting.' The series has become a global phenomenon."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_Cover_.png?raw=true',
      story: "The official cover for the much-anticipated album, 'Neon Heart.' The artwork reflects the album's blend of electrifying synth-pop and introspective lyrics, promising a new sonic era for Li Feng."
    },
    {
      src: 'https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_Album.png?raw=true',
      story: "Behind the scenes during the recording of 'Neon Heart.' This photo captures an intimate moment of creative focus in the studio, where Li Feng meticulously crafted every note of their groundbreaking new album."
    }
  ];

  return (
    <Section id="gallery" title="Gallery" className="bg-brand-dark">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <GalleryImage key={index} image={image} onImageSelect={onImageSelect} />
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;