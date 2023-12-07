
// import { IoPersonCircle } from "react-icons/io5";
// import classes from "../Home/Testimonials.module.css";

// const testimonialData = [
//   {
//     id: 1,
//     quote: "In the realm of UI/UX design, our team is dedicated to crafting seamless and visually appealing user experiences...",
//     name: "John Doe",
//     role: "UI/UX Designer",
//   },
//   {
//     id: 2,
//     quote: "Our development team is committed to building robust and scalable solutions that meet the needs of our clients...",
//     name: "Jane Smith",
//     role: "Software Engineer",
//   },
//   {
//     id: 3,
//     quote: "As a project manager, I focus on ensuring timely delivery and effective communication within the team...",
//     name: "Bob Johnson",
//     role: "Project Manager",
//   },
//   {
//     id: 4,
//     quote: "In the world of marketing, creativity and strategy go hand in hand to create compelling campaigns that resonate with our audience...",
//     name: "Alice Williams",
//     role: "Marketing Specialist",
//   },
// ];

// const TestimonialCard = () => {
//   return (
//     <>
//       {testimonialData.map((testimonial) => (
//         <div className={classes.card} key={testimonial.id}>
//           <div className={classes.info}>
//             <img src="/assets/quotes-sign.webp" alt="Quotes" />
//             <p>{testimonial.quote}</p>
//           </div>
//           <div className={classes.reviewer}>
//             <IoPersonCircle size={60} />
//             <div className={classes.name}>
//               <span>{testimonial.name}</span>
//               <p>{testimonial.role}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default TestimonialCard;










// TestimonialCard.jsx
import React from "react";
import { IoPersonCircle } from "react-icons/io5";
import classes from "../Home/Testimonials.module.css";

const TestimonialCard = ({ data }) => {
  const { quote, name, role } = data;

  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <img src="/assets/quotes-sign.webp" alt="Quotes" />
        <p>{quote}</p>
      </div>
      <div className={classes.reviewer}>
        <IoPersonCircle size={60} />
        <div className={classes.name}>
          <span>{name}</span>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

