import '../Styles/AboutUs.css'
import { Link } from 'react-router-dom';
// import aboutustopimg from "../Resources/aboutus-top.jpg"

const AboutUs = () => {


  return ( 

    <div className='aboutus-page'>

         <div className="top-container">
 

          <h1> About Us </h1>
          <div>
     <p> 
      <Link  className='top-p-link' to="/">Home</Link> {'  >  '}<span>About Us</span>
     </p> 
    </div>
          

{/* 
        <button className='top-conatiner-btn'> conatact us </button> */}

         {/* <img  className='top-container-img' src={aboutustopimg} alt="" /> */}
        

         </div>

   
           <div className="aboutus-card">
       
           <div className="card">

            <h3>title</h3>

            <p>content</p>
          </div>
      

      
          </div>

      <div className="range-vis">
        <h1>write a visualization with range about our company </h1>

      </div>
      
      <div className="about-com">
        <h1>23 + Years Helping Business</h1>
        <h1>250 + Working Employees</h1>
        <h1>4500 + Complete Projects</h1>
        <h1>3000 + Happy Customers</h1>
        <h2>write all those things with the background image with no fixed position</h2>
      </div>

      <div className="team-card"> 
        <h1>our team cards </h1> 
      </div>

      <div className="testmonials"> 
        <h1>testimonials section with feedback  </h1>
      </div>

      <div className="company-img-list">   
        <h1>Our trusted companies </h1>
      </div>
    </div>
  );
}

export default AboutUs;
