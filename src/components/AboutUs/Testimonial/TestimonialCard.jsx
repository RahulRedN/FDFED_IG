
import Slider from "react-slick";
import "../Testimonial/Styles/Testimonialstyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Renamed the rendering component to TestCard
const TestCard = ({ heading, quote, imageSrc, altText, name }) => {
  return (
    <div className="testimonial-card">
      <h1 className="testimonial-card-heading">{heading}</h1>
      <p className="testimonial-card-quote">{quote}</p>
      <img className="testimonial-card-image" src={imageSrc} alt={altText} />
      <p className="testimonial-card-name">{name}</p>
    </div>
  );
};

// Changed the component name to TestimonialList for clarity
const TestimonialCard = ({ testimonials }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          // Used the correct component name TestCard
          <TestCard
            key={index}
            heading={testimonial.heading}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            name={testimonial.name}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCard;
