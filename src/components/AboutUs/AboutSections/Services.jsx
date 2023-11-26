import "../AboutSections/Styles/Services.css";

const Services = () => {
  return (
    <div className="services-container">

      <div className="service-top">
      <div className="service-item">
        <div className="service-details">
          <img src="" alt="" className="service-icon" />
          <h5 className="service-title">Recruitment</h5>
          <p className="service-description">
            Donec id eleifend lectus. Aliquam gravida.
          </p>
        </div>
      </div>

      <div className="service-item">
        <div className="service-details">
          <img src="" alt="" className="service-icon" />
          <h5 className="service-title">HR Outsourcing</h5>
          <p className="service-description">
            Maecenas bibendum augue non purus
          </p>
        </div>
      </div>

      <div className="service-item">
        <div className="service-details">
          <img src="" alt="" className="service-icon" />
          <h5 className="service-title">Expatriate Services</h5>
          <p className="service-description">
            Suspendisse potenti. Nunc congue est dolor
          </p>
        </div>
      </div>

      <div className="service-item">
        <div className="service-details">
          <img src="" alt="" className="service-icon" />
          <h5 className="service-title">Executive Search</h5>
          <p className="service-description">
            Vestibulum tortor lorem, gravida in iaculis ac
          </p>
        </div>
      </div>


      </div>

      <div className="services-overview">
        <h3 className="overview-heading">Our Services</h3>
        <h1 className="overview-title">
          Our Rigorous <br />
          Process Is Proven
        </h1>
        <p className="overview-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Morbi
          ullamcorper viverra consectetur. Ut pretium metus ut dolor tincidunt
          tincidunt. Aliquam justo mi, dictum eu tincidunt lacinia, pretium
          gravida purus. Nullam dignissim urna at sem congue, sed pharetra ipsum
          posuere.
        </p>
        <button className="view-more-btn"> View More</button>
      </div>
    </div>
  );
};

export default Services;
