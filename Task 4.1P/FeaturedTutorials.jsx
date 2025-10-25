import React from 'react';
import TutorialCard from './TutorialCard';
import { faker } from '@faker-js/faker'; // 1. Import faker

// 2. Create a function to generate one random tutorial
const createRandomTutorial = () => {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    description: `e.g., ${faker.hacker.phrase()}`, // More tech-y! e.g., "Try to bypass the..."
    // This is the fixed line
    username: faker.person.firstName(),
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1),
    imageUrl: `https://picsum.photos/seed/${faker.string.uuid()}/400/300`,
  };
};

const FeaturedTutorials = () => {
  // 3. Create an array of 3 random tutorials
  const tutorials = [
    createRandomTutorial(),
    createRandomTutorial(),
    createRandomTutorial(),
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Tutorials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 4. We map over the new random array [cite: 29] */}
        {tutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            username={tutorial.username}
            rating={tutorial.rating}
            imageUrl={tutorial.imageUrl}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300">
          See all tutorials
        </button>
      </div>
    </section>
  );
};

export default FeaturedTutorials;