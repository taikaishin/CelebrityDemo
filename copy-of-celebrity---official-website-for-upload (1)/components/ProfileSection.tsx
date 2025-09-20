import React, { useState, useEffect } from 'react';
import Section from './Section';
import { generateProfileBio } from '../services/geminiService';

const ProfileSection: React.FC = () => {
  const [bio, setBio] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBio = async () => {
      setLoading(true);
      const generatedBio = await generateProfileBio();
      setBio(generatedBio);
      setLoading(false);
    };
    fetchBio();
  }, []);

  return (
    <Section id="profile" title="Profile" className="bg-brand-gray">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <img 
            src="https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_Prizes_.png?raw=true" 
            alt="Li Feng Profile" 
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
        <div className="md:col-span-3">
          <h3 className="text-3xl font-bold mb-4 text-brand-blue">Li Feng</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            {loading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            ) : (
              bio.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfileSection;