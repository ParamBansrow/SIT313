import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="grow container mx-auto px-4">
        <Hero />
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>

      {/* Subscribe Section (Full Width) */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;