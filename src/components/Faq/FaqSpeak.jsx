import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaTeamspeak } from "react-icons/fa6";


const FaqSpeak = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    return ( 
        
        
        <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }} // Change y to 100 to start from the bottom
        animate={inView ? { x: 0, opacity: 1 } : "hidden"} // Change y to 0 to move up
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.3 }} 
        className="speak-container"
      >
        
          <h1>Haven’t found what youre looking for?</h1>
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<FaTeamspeak />}
              colorScheme="blue"
              variant="solid"
              size="lg"
            >
              Speak With Us
            </Button>
            <Button
              leftIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="outline"
              size="lg"
            >
              Contact Us
            </Button>
          </Stack>
        </motion.div> );
}
 
export default FaqSpeak;