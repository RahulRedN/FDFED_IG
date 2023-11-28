
import TestimonialCard from "./TestimonialCard";
import "../Testimonial/Styles/Testimonialstyles.css";
import team1 from "../Testimonial/Resources/team-1.jpg"
import team2 from "../Testimonial/Resources/team-2.jpg"
import team3 from "../Testimonial/Resources/team-3.jpg"
import heading from "../Testimonial/Resources/tilt.png"

const Testimonial = () => {

  const testimonials = [
    
    {
      id: 1,
      heading: heading,
      quote: " I had a great experience with this company. The service was excellent, and the team was very professional.",
      imageSrc:team1,
      altText: "Customer Photo 1",
      name: "John Doe"
  },
  {
      id: 2,
      heading: heading,
      quote: "Amazing service! The team went above and beyond to meet my expectations. Highly recommended.",
      imageSrc: team2,
      altText: "Customer Photo 2",
      name: "Jane Smith"
  },
  {
      id: 3,
      heading:heading,
      quote: "The quality of the products is outstanding. I'm a satisfied customer and will definitely come back.",
      imageSrc: team3,
      altText: "Customer Photo 3",
      name: "Robert Johnson"
  }
  //,
   //{
  //     id: 4,
  //     heading: heading,
  //     quote: "Fast delivery and excellent customer support. I recommend this company to everyone.",
  //     imageSrc: team2,
  //     altText: "Customer Photo 4",
  //     name: "Emily Brown"
  // },
  ];

  return (
    <div className="testimonial-container">

      <div className="testimonial-top">
        <h1> What They Say ?</h1>
        <p>
          Vestibulum sit amet odio dui. Integer eleifend nibh massa,  <br />nec
          vehicula metus efficitur non. Pellentesque iaculis tincidunt <br /> purus,
          eleifend interdum arcu tempor ac.
        </p>
      </div>
      <div className="testimonial-bottom">
        <TestimonialCard testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonial;
