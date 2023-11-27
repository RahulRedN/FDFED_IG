
import "../AboutSections/Styles/AboutUsTop.css" 
import TopImage from "../AboutSections/Resources/TopImage.jpg"

const AboutUsTop = () => {
  return (
    <div className="AboutUsTop">
      <div>
        <img src={TopImage} alt="" />
      </div>

      <div className="AboutUsTopContent">
        <h3>Welcome To InspiringGo</h3>
        <h1>We Help Your  Company To Grow</h1>
        <p>Curabitur pharetra luctus vulputate. Proin finibus odio vel ipsum scelerisque, luctus bibendum purus pellentesque...</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default AboutUsTop;
