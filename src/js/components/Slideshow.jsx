import React from 'react';
import Slide from './Slide';
import { v4 as uuid } from 'uuid';

function Slideshow({ slides }) {
  return (
    <div className='slideshow-container'>
      {slides.map((slide) => (
        <Slide slide={slide} key={uuid()} />
      ))}
    </div>
  );
}
export default Slideshow;
