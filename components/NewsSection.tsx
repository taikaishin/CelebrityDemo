import React, { useState, useEffect, useRef } from 'react';
import { NewsArticle } from '../types.ts';
import { generateNewsArticles } from '../services/geminiService.ts';
import Section from './Section.tsx';

const imageUrls = [
  'https://github.com/taikaishin/CelebrityDemo/blob/main/Celerbrity_Drama.png?raw=true',
  'https://github.com/taikaishin/CelebrityDemo/blob/main/Celebruty_Interview.png?raw=true',
  'https://github.com/taikaishin/CelebrityDemo/blob/main/Celebity_Autobiography.png?raw=true',
];

const ArticleDetail: React.FC<{ article: NewsArticle; imageUrl: string; onClose: () => void; }> = ({ article, imageUrl, onClose }) => (
    <div className="bg-brand-gray rounded-lg overflow-hidden p-6 sm:p-8 lg:p-12 relative animate-fade-in-up">
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close article"
        >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <img src={imageUrl} alt={article.title} className="w-full h-64 md:h-96 object-cover rounded-lg mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{article.title}</h2>
        <p className="text-sm text-gray-400 mb-6">{article.date}</p>
        <div className="text-gray-300 leading-relaxed space-y-4">
            {article.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    </div>
);


const NewsCard: React.FC<{ article: NewsArticle; imageUrl: string; onSelect: () => void; }> = ({ article, imageUrl, onSelect }) => (
  <button onClick={onSelect} className="block w-full text-left bg-brand-gray rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-opacity-50">
    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
      <img src={imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-400 mb-2">{article.date}</p>
      <h3 className="text-xl font-bold mb-3 h-20 overflow-hidden group-hover:text-brand-blue transition-colors duration-300">{article.title}</h3>
      <p className="text-gray-300 h-24 overflow-hidden">{article.excerpt}</p>
    </div>
  </button>
);

const LoadingSkeleton: React.FC = () => (
    <div className="bg-brand-gray rounded-lg overflow-hidden animate-pulse">
        <div className="bg-gray-700 aspect-w-16 aspect-h-9"></div>
        <div className="p-6">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
            <div className="h-6 bg-gray-700 rounded w-full mb-3"></div>
            <div className="h-4 bg-gray-700 rounded w-full mt-4"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        </div>
    </div>
);

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedArticle, setSelectedArticle] = useState<{ article: NewsArticle; index: number } | null>(null);
  const articleDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const fetchedArticles = await generateNewsArticles();
      setArticles(fetchedArticles);
      setLoading(false);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      setTimeout(() => {
        articleDetailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [selectedArticle]);

  const handleArticleSelect = (article: NewsArticle, index: number) => {
    setSelectedArticle({ article, index });
  };
  
  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };


  return (
    <Section id="news" title="Latest News" className="bg-brand-dark">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <LoadingSkeleton key={i} />)
        ) : (
          articles.map((article, index) => (
            <NewsCard 
              key={index} 
              article={article} 
              imageUrl={imageUrls[index % imageUrls.length]} 
              onSelect={() => handleArticleSelect(article, index)}
            />
          ))
        )}
      </div>

      <div ref={articleDetailRef} className="mt-16 min-h-[1rem]">
        {selectedArticle && (
          <ArticleDetail 
            article={selectedArticle.article}
            imageUrl={imageUrls[selectedArticle.index % imageUrls.length]}
            onClose={handleCloseArticle}
          />
        )}
      </div>
    </Section>
  );
};

export default NewsSection;