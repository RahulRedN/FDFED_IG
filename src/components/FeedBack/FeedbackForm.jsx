import "../FeedBack/css/FeedbackForm.css";
import { useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Rating } from "primereact/rating";

// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import Person from '@mui/icons-material/Person';
// import People from '@mui/icons-material/People';
// import Apartment from '@mui/icons-material/Apartment';

const FeedbackForm = ({ closeModal }) => {
  const [userFeedback, setUserFeedback] = useState("");
  const [rating, setRating] = useState(null);
  const [value, setValue] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setUserFeedback(event.target.value);
  };

  const backArrow = () => {
    closeModal();
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    alert("submitted");
  };

  return (
    <div>
    <ArrowBackIcon
  onClick={backArrow}
  boxSize={8} 
  _hover={{ cursor: 'pointer', color: '#2b71e8' }} 
/>

   

      <div className="feedback-heading">

        <h1 className="feedback-logo"> INSPIRINGO GO</h1>
        <h1 className="feedback-name">  Your Feedback </h1>

      </div>

      <hr className="hr-feed" />

      <form onSubmit={handlesubmit}    action="" className="feedback-form">
        <h1 >What is your opinion of this page ?</h1>

        <Rating 
        className="rating"
          value={value}
          onChange={(e) => setValue(e.value)}
          cancelIcon={
            <img
              src="https://primefaces.org/cdn/primereact/images/rating/cancel.png"
              alt="custom-cancel-image"
              width="40px"
              height="40px"
            />
          }
          onIcon={
            <img
              src="https://primefaces.org/cdn/primereact/images/rating/custom-icon-active.png"
              alt="custom-image-active"
              width="40px"
              height="40px"
            />
          }
          offIcon={
            <img
              src="https://primefaces.org/cdn/primereact/images/rating/custom-icon.png"
              alt="custom-image"
              width="40px"
              height="40px"
            />
          }
        />

{/* <hr className="hr-feed" /> */}

<div>
<h1> Please select Your feedback category below </h1>

<div className="category">

<button className="feedback-buttons"> Suggestion </button>

<button className="feedback-buttons"> Sometimes is not quite right </button>
<button className="feedback-buttons"> Compliment </button>


{/* 
<RadioGroup aria-label="Your plan" name="people" defaultValue="Individual">
      <List
        sx={{
          minWidth: 240,
          '--List-gap': '0.5rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
          '--ListItemDecorator-size': '32px',
        }}
      >
        {['Individual', 'Team', 'Enterprise'].map((item, index) => (
          <ListItem variant="outlined" key={item} sx={{ boxShadow: 'sm' }}>
            <ListItemDecorator>
              {[<Person />, <People />, <Apartment />][index]}
            </ListItemDecorator>
            <Radio
              overlay
              value={item}
              label={item}
              sx={{ flexGrow: 1, flexDirection: 'row-reverse' }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      inset: -1,
                      border: '2px solid',
                      borderColor: theme.vars.palette.primary[500],
                    }),
                  }),
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </RadioGroup> */}

</div>
</div>

{/* <hr className="hr-feed" /> */}


        <div>

          <h1>Please leave your feedback below </h1>
          <textarea
          className="textarea-feedback"
            value={userFeedback}
            onChange={handleFeedbackChange}
            placeholder="Write your feedback here "
            rows={4}
            cols={50}
          />
        </div>
        <button  className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
