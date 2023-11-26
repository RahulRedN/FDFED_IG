import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import "../Testimonial/Styles/Testimonialstyles.css";

const TestimonialList = ({ testimonials }) => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const showNextSlide = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNextSlide();
    }, 5000); // Auto-slide every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonial-slider">
      <div className="testimonial-cards-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            heading={testimonial.heading}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            name={testimonial.name}
            isActive={index === testimonialIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
