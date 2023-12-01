// import Slideshow from "../components/homepage_compos/Slideshow"
// import Navbar_home from "../components/homepage_compos/Navbar_home"
import Slider from "../components/homepage_compos/ImageSlider_Chakra";
import Roles from "../components/homepage_compos/Roles";
import OurServices from "../components/homepage_compos/OurServices";
import Testimonials from "../components/homepage_compos/Testimonials";
import Footer_Job from "../components/homepage_compos/Footer_Job";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <>
      <Slider />
      <Roles />
      <OurServices />
      <Testimonials />
      <Footer_Job />
    </>
  );
};

export default Home;
