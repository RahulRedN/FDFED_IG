import "../AboutSections/Styles/AboutUsTop3.css";
import handshake from "../AboutSections/Resources/handshake.png"
// import social from "../AboutSections/Resources/social.png"
import globe from "../AboutSections/Resources/Globe Selection.gif"

const AboutUsTop3 = () => {
  return (
    <div className="AboutUsTop3">

      <div className="peoples">
        <img src={globe} alt="" />
        <h6>687+</h6>
        <p>People Hired</p>
      </div>

      <div className="peoples">
        <img src={handshake} alt="" />
        <h6>672+</h6>
        <p>Satisfied Company</p>
        <div/>
      </div>


      <div className="provieds">
          <h3>We Provide Awesome Service</h3>
        </div>
    </div>
  );
};

export default AboutUsTop3;
