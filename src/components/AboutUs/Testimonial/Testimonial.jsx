
import TestimonialList from "./TestimonialList";
import "../Testimonial/Styles/Testimonialstyles.css";

const Testimonial = () => {
  // Assuming you have a 'testimonials' array to pass to TestimonialList
  const testimonials = [
    
    {
      id: 1,
      heading: "Customer Testimonial 1",
      quote: "I had a great experience with this company. The service was excellent, and the team was very professional.",
      imageSrc: "url-to-image-1",
      altText: "Customer Photo 1",
      name: "John Doe"
  },
  {
      id: 2,
      heading: "Customer Testimonial 2",
      quote: "Amazing service! The team went above and beyond to meet my expectations. Highly recommended.",
      imageSrc: "url-to-image-2",
      altText: "Customer Photo 2",
      name: "Jane Smith"
  },
  {
      id: 3,
      heading: "Customer Testimonial 3",
      quote: "The quality of the products is outstanding. I'm a satisfied customer and will definitely come back.",
      imageSrc: "url-to-image-3",
      altText: "Customer Photo 3",
      name: "Robert Johnson"
  },
  {
      id: 4,
      heading: "Customer Testimonial 4",
      quote: "Fast delivery and excellent customer support. I recommend this company to everyone.",
      imageSrc: "url-to-image-4",
      altText: "Customer Photo 4",
      name: "Emily Brown"
  },
  ];

  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <h1> What They Say ?</h1>
        <p>
          Vestibulum sit amet odio dui. Integer eleifend nibh massa, nec
          vehicula metus efficitur non. Pellentesque iaculis tincidunt purus,
          eleifend interdum arcu tempor ac.
        </p>
      </div>
      <div>
        <TestimonialList testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonial;
