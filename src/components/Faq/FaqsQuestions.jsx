import faqsData from "../faqsData"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FaqQuestions = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    return ( 

<>
        <div className="faqs-container">
<motion.div
  ref={ref}
  initial={{ x: 100, opacity: 0 }} // Change y to 100 to start from the bottom
  animate={inView ? { x: 0, opacity: 1 } : "hidden"} // Change y to 0 to move up
  transition={{ ease: "easeInOut", duration: 0.9, delay: 0.5 }} // Add delay of 0.3 seconds
  // key={index}
  className="heading"
>
  <div className="color-heading"> </div>
  <h1> Apply For a Job</h1>
</motion.div>

<Accordion allowToggle>
  {faqsData.map((faq) => (
    <AccordionItem key={faq.id} className="faq-item">
      <h2>
        <AccordionButton className="accordion-button">
          <Box
            as="span"
            flex="1"
            textAlign="left"
            className="faq-question"
          >
            {faq.Faq_Que}
          </Box>

          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className="faq-answer">
        {faq.Faq_Ans}
      </AccordionPanel>
    </AccordionItem>
  ))}
</Accordion>
</div>

<div className="faqs-container">
<motion.div
  ref={ref}
  initial={{ x: 100, opacity: 0 }} // Change y to 100 to start from the bottom
  animate={inView ? { x: 0, opacity: 1 } : "hidden"} // Change y to 0 to move up
  transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }} 
  className="heading"
>
  <div className="color-heading"> </div>
  <h1> Technical Support</h1>
</motion.div>

<Accordion allowToggle>
  {faqsData.map((faq) => (
    <AccordionItem key={faq.id} className="faq-item">
      <h2>
        <AccordionButton className="accordion-button">
          <Box
            as="span"
            flex="1"
            textAlign="left"
            className="faq-question"
          >
            {faq.Faq_Que}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className="faq-answer">
        {faq.Faq_Ans}
      </AccordionPanel>
    </AccordionItem>
  ))}
</Accordion>
</div>

<div className="faqs-container">

<motion.div
  ref={ref}
  initial={{ x: 100, opacity: 0 }} // Change y to 100 to start from the bottom
  animate={inView ? { x: 0, opacity: 1 } : "hidden"} // Change y to 0 to move up
  transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }} 
  className="heading"
>
  <div className="color-heading"> </div>
  <h1> Career Services</h1>
</motion.div>

<Accordion allowToggle>
  {faqsData.map((faq) => (
    <AccordionItem key={faq.id} className="faq-item">
      <h2>
        <AccordionButton className="accordion-button">
          <Box
            as="span"
            flex="1"
            textAlign="left"
            className="faq-question"
          >
            {faq.Faq_Que}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className="faq-answer">
        {faq.Faq_Ans}
      </AccordionPanel>
    </AccordionItem>
  ))}
</Accordion>
</div>

</>
     );
}
 
export default FaqQuestions;