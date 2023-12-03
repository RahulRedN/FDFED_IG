import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsTop2Cards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const dummyData = [
    {
      title: "Develop & Training",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Job Placement",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },

    {
      title: "Job Counselling",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Test & Interview",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
    },
  ];

  return (
    <div className="AboutUsTop2Cards">
      {dummyData.map((data, index) => (

        <motion.div
        ref={ref}
        // initial={{ x: 100, y: 0, scale: 0.8, opacity: 0 }}
        // animate={inView ? { x: 0, y: 0, scale: 1, opacity: 1 } : "hidden"}
        initial={{ x: 100, y: 0,  opacity: 0 }}
        animate={inView ? { x: 0, y: 0,  opacity: 1 } : "hidden"}
        transition={{ ease: "easeInOut", delay: index * 0.3, duration: 0.5}}
        // transition={{ ease: "easeInOut", duration: 0.3}}
        className="AboutUsTop2Card"
        key={index}
      >
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutUsTop2Cards;
