// TestimonialCard.js

import React, { useState, useEffect } from 'react';
import '../Testimonial/Styles/Testimonialstyles.css';

const TestCard = ({ heading, quote, imageSrc, altText, name }) => {
  return (
    <div className="testimonial-card visible">
      <h1 className="testimonial-card-heading">{heading}</h1>
      <p className="testimonial-card-quote">{quote}</p>
      <img className="testimonial-card-image" src={imageSrc} alt={altText} />
      <p className="testimonial-card-name">{name}</p>
    </div>
  );
};

const TestimonialCard = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Auto transition to the next testimonial
    }, 5000); // Adjust the interval as needed (e.g., 5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId);
  }, [testimonials]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-controls">
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>

      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`testimonial-card ${index === currentIndex ? 'visible' : 'hidden'}`}
        >
          <TestCard
            heading={testimonial.heading}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            name={testimonial.name}
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
