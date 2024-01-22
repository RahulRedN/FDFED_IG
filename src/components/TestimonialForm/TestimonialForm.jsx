import  { useState } from 'react';
import "./css/TestimonialForm.css"

const TestimonialForm = () => {
  const [testimonialData, setTestimonialData] = useState({
    fullname: '',
    email: '',
    testimonial: '',
    agree: '',
    photo: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTestimonialData({
      ...testimonialData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setTestimonialData({
        ...testimonialData,
        photo: file,
      });
    } else {
      // Handle invalid file type
      alert('Please select a valid JPEG or PNG image file.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle the form submission, e.g., sending data to a server
    console.log('Testimonial data submitted:', testimonialData);
  };

  return (
    <div className="testimonial-form-container">
      <form onSubmit={handleSubmit} className="testimonial-form">
        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Enter Your Full Name"
          value={testimonialData.fullname}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={testimonialData.email}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="testimonial">Testimonial:</label>
        <textarea
          id="testimonial"
          name="testimonial"
          placeholder="Your Testimonial"
          value={testimonialData.testimonial}
          onChange={handleChange}
          className="input-field"
        ></textarea>

        <label htmlFor="agree">Do you agree to our terms?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agree"
              value="Yes"
              onChange={handleChange}
              className="radio-input"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agree"
              value="No"
              onChange={handleChange}
              className="radio-input"
            />
            No
          </label>
        </div>

        <label htmlFor="photo">Upload Photo (JPEG or PNG):</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/jpeg, image/png"
          onChange={handleFileChange}
          className="file-input"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
