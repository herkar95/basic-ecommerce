import React, { useState } from 'react';
import Header from './js/components/Header';
import Slideshow from './js/components/Slideshow';
import Products from './js/components/Products';
import Navigation from './js/components/Navigation';

function App() {
  // State
  const [slides, setSlides] = useState([
    'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
    'https://source.unsplash.com/ggZuL3BTSJU/1600x900',
    'https://source.unsplash.com/TMOeGZw9NY4/1600x900',
    'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
    'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
  ]);

  return (
    <div className='container'>
      <Header />
      <div className='main-content'>
        <div className='left-nav'>
          <Navigation />
        </div>
        <div className='right-content'>
          {/* <Slideshow slides={slides} /> */}
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
