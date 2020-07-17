import React from 'react';

function Slide({ slide }) {
  return (
    <div className='slide'>
      <img src={slide} alt='' />
    </div>
  );
}

export default Slide;
