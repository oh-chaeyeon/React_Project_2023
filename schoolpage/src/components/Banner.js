// Banner.js

import React from 'react';

const Banner = ({ imageSource, altText }) => {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={imageSource} alt={altText} />
      </div>
    </div>
  );
};

export default Banner;
