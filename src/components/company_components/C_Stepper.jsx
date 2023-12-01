// import React from 'react';
import { Box } from '@chakra-ui/react'; // Add this import for the Box component
import {
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
];

function C_Stepper() {
  const { activeStep } = useSteps({
    initialStep: 1, // Change "index" to "initialStep"
    steps: steps.length, // Change "count" to "steps"
  });

  return (
    <div>
        <Stepper size='lg' colorScheme='blue' activeStep={activeStep}> {/* Change "index" to "activeStep" */}
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={`✅`} incomplete={`😅`} active={`📍`} />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
    </div>
    
  );
}

export default C_Stepper; // Don't forget to export the component

// Assuming you have a root element in your HTML to mount the React app, you can render the component like this:
// ReactDOM.render(<Example />, document.getElementById('root'));
