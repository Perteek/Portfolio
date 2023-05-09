import React from 'react';
import './circle.css'; // Import CSS file for styling

function Circle({ src, alt }) {
  return (
    <div className="circle">
      <img src={src} alt={alt} id='img' style={{width:'16vw'}} />
    </div>
  );
}

export default Circle;
