import classes from "./footerStyles.module.css";
import { Mail, Navigation, Phone } from "lucide-react";
function Footer() {
  return (
    <>
      <footer>
        <div className={classes.main_footer}>
          <div className={classes.missout_section}>
            <h2 className={classes.middle_heads_light}>Connect With Us</h2>
            <div className={classes.cnctwithus}>
              <Mail />
              <div> inspiringgo@gmail.com</div>
            </div>
            <div className={classes.cnctwithus}>
              <Navigation />
              <div> InspiringGo, SriCity</div>
            </div>
            <div className={classes.cnctwithus}>
              <Phone />
              <div> 9533037175</div>
            </div>
          </div>
          <div className={classes.link_section}>
            <div className={classes.link_top}>
              <div className={classes.company_footer}>
                {/* <h2><a href="/UnderConstruction">Company</a></h2> */}
                <h2>
                  <a href="/AboutUs">About Us</a>
                </h2>
                <h2>
                  {" "}
                  <a href="/FAQ">FAQs</a>
                </h2>
                <h2>
                  {" "}
                  <a href="#">Login</a>
                </h2>
              </div>
              <div className={classes.cservice_footer}>
                <h2>
                  <a href="/services">Our Services</a>
                </h2>
                <h2 style={{ textDecoration: "underline" }}>Let's Talk</h2>
                <div className={classes.link_bottom}>
                  <div className={classes.social_media}>
                    <a href="#">
                      {" "}
                      <img src="images/twitter_icon.svg" alt="Twitter" />
                    </a>
                    <a href="#">
                      {" "}
                      <img src="images/linkedin_icon.svg" alt="LinkedIn" />
                    </a>
                    <a href="#">
                      <img src="images/instagram_icon.svg" alt="Instagram" />
                    </a>
                    <a href="#">
                      <img src="images/facebook_icon.svg" alt="Facebook" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.copywrite}>
          <p>© 2023 Inspiring Go</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
