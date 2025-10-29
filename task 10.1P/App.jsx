import React from 'react';

import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="App flex flex-col min-h-screen">  
        <Newsletter />
      <main className="grow">

        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Welcome to DEV@Deakin</h1>
          <p className="mt-4">This is your main page content.</p>
        </div>
      </main>
      <Footer />
      
    </div>
      
      
    
  );
}

export default App;