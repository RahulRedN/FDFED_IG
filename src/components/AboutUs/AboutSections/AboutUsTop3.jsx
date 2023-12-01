import "../AboutSections/Styles/AboutUsTop3.css";

import { HeartHandshake, Globe2 } from "lucide-react";

import Counter from "../../UI/Counter";

const AboutUsTop3 = () => {
  return (
    <div className="AboutUsTop3">
      <div className="peoples">
        {/* <img src={<HeartHandshake />} alt="" /> */}
        <Globe2 className="Globe2" />
        <h6>
          <Counter from={0} to={687} duration={2} />+
        </h6>
        <p>People Hired</p>
      </div>

      <div className="peoples">
        <HeartHandshake className="Globe2" />
        <h6>
          <Counter from={0} to={672} duration={2}/>+
        </h6>
        <p>Satisfied Company</p>
        <div />
      </div>

      <div className="provides">
        <h3>We Provide Awesome Service</h3>
      </div>
    </div>
  );
};

export default AboutUsTop3;
