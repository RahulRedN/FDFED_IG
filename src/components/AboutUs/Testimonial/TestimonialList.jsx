





import TestimonialCard from "./TestimonialCard"; 
const TestimonialList = (testimonials) => {





  const  data = [

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
  <div>
    {data.map((testimonials, index) => (
      <TestimonialCard
        key={index}
        heading={testimonials.heading}
        quote={testimonials.quote}
        imageSrc={testimonials.imageSrc}
        altText={testimonials.altText}
        name={testimonials.name}
      />
    ))}
  </div>
);
}
 

export default TestimonialList;









