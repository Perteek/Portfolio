import React from 'react';

function LinkedInPhoto({ url, alt }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={"https://image.similarpng.com/very-thumbnail/2021/01/Black-linkedin-logo-design-on-transparent-background-PNG.png"}
        alt={alt}
        style={{ width: '50px', borderRadius: '50%',marginLeft:"1vw" }}
      />
    </a>
  );
}

export default LinkedInPhoto;

