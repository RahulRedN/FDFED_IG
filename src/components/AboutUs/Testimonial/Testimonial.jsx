import TestimonialList from "./TestimonialList";

import "../Testimonial/Styles/Testimonialstyles.css"

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testmonial-container">
        <h1> What They Say ?</h1>
        <p>
          Vestibulum sit amet odio dui. Integer eleifend nibh massa, nec
          vehicula metus efficitur non. Pellentesque iaculis tincidunt purus,
          eleifend interdum arcu tempor ac.
        </p>
        <div>
          <TestimonialList />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
