
import "../Testimonial/Styles/Testimonialstyles.css";

const TestimonialCard = ({ heading, quote, imageSrc, altText, name, isActive = false }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <h1 className="testimonial-card-heading">{heading}</h1>
      <p className="testimonial-card-quote">{quote}</p>
      <img className="testimonial-card-image" src={imageSrc} alt={altText} />
      <p className="testimonial-card-name">{name}</p>
    </div>
  );
};

export default TestimonialCard;
