import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import imageData from '../imagedata';
import './Carousel.css';

export default function CarouselComponent() {
    return (
        <Carousel
            showArrows={true}
            centerMode={false}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
        >
            {imageData.map((image) => (
                <div key={image.label}>
                <img src={image.src} alt={image.label} />
                </div>
            ))}
        </Carousel>
    );
}