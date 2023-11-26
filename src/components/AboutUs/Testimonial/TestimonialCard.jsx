import "../Testimonial/Styles/Testimonialstyles.css"
const TestimonialCard = (testmonials) => {

    const { heading, quote, imageSrc, altText, name } = testmonials;
  
    return (
      <div className="testimonial-cards">
        <h1>{heading}</h1>
        <p>{quote}</p>
        <img src={imageSrc} alt={altText} />
        <p className="name">{name}</p>
      </div>
    );
  };
  
  export default TestimonialCard;