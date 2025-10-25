import React from 'react';
import ArticleCard from './ArticleCard';
import { faker } from '@faker-js/faker'; // 1. Import faker

// 2. Create a function to generate one random article
const createRandomArticle = () => {
  return {
    id: faker.string.uuid(), // A unique ID
    title: faker.lorem.words(3), // e.g., "Sint Omittis Vel"
    description: `e.g., ${faker.commerce.productName()}`, // e.g., "Generic Steel Computer"
    author: faker.person.fullName(), // e.g., "John Doe"
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1), // A random rating 4.5-5.0
    
    // We use picsum.photos for random images, as allowed 
    // We add a unique 'seed' so the image is random but stable on re-renders
    imageUrl: `https://picsum.photos/seed/${faker.string.uuid()}/400/300`,
  };
};

const FeaturedArticles = () => {
  // 3. Create an array of 3 random articles
  // This follows the task to use an array [cite: 29]
  const articles = [
    createRandomArticle(),
    createRandomArticle(),
    createRandomArticle(),
  ];
  
  // The rest of your component logic is exactly the same!
  // It just maps over the new, randomly-generated array.
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.id} // Use the random ID as the key
            title={article.title}
            description={article.description}
            author={article.author}
            rating={article.rating}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300">
          See all articles
        </button>
      </div>
    </section>
  );
};

export default FeaturedArticles;