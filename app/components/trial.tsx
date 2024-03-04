import React from 'react';

const Parallelogram = ({  width = '200px', height = '100px', angle = '20deg', backgroundColor = 'blue' }) => {
  return (
    <div
      className={`relative overflow-hidden w-${width} h-${height} bg-${backgroundColor}`}
      style={{ transform: `skewX(${angle})` }}
    >
      <div className="absolute inset-0 z-10">
       
      </div>
      <div className="absolute inset-0 z-0 bg-transparent" style={{ transform: `skewX(-${angle})` }} />
    </div>
  );
};

export default Parallelogram;