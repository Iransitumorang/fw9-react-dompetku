import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/LandingPage.css';

import dompetku from "../assets/img/dompetku.png";
import dompetku2 from "../assets/img/dompetku2.png";
import sircleLine from "../assets/img/sircleLine.png";
import phoneHeader from "../assets/img/phone-header.png";
import garisFooter from "../assets/img/hr-fe.png";
import support from "../assets/img/support.png";
import dataPrivacy from "../assets/img/privacy.png";
import easyDownload from "../assets/img/easyDownload.png";
import sponsor from "../assets/img/sponsor.png";
import phone2 from "../assets/img/png-phone2.png";
import sherina from "../assets/img/sherina.png";
import jessica from "../assets/img/jessica.png";
import robert from "../assets/img/robert.png";

function LandingPage() {
  // document.getElementsByClassName("toggler-navbar")[0].addEventListener("click");
  // document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
  // document.getElementsByClassName("sidebar")[0].classList.toggle('open')

  return (
    <div>
        <div className="hamburger">
          <div className="toggler-navbar">
            <div className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        <Link className="logo-hbg" to="/Home">
            <img src={dompetku2} alt="dompetku"/>
        </Link>
        </div>
        <div className="sidebar">
          <div>
            <Link to="/Login" className="login-hamburger">Login</Link>
          </div>
          <div>
            <Link to="/Signup" className="login-hamburger">Sign Up</Link>
          </div>
        </div>

      <header>
        <div className="menu">
          <div className="logo">
            <img src={dompetku} alt="logo dompetku" />
            <img src={dompetku2} alt="logo dompetku" />
          </div>
          <div className="awesome">
            <span className="saving">
              Awesome App <br /> For Saving <span className="time"> Time.</span>
            </span>
            <h6>
              We bring you a mobile app for banking problems that <br /> oftenly
              wasting much of your times.
            </h6>
            <Link to="/Signup" className="try-it-free">
              <button>Try It Free</button>
            </Link>
          </div>
          {/* <img src={} alt="Transaction History" className="trans-hst-responsive"/> */}
        </div>
        <div className="header-right">
          <Link to="/Login" className="login">
            <button>Login</button>
          </Link>
          <Link to="/Signup" className="lp-signup">
            <button className="btn-lp-signup">Sign Up</button>
          </Link>
          <img src={sircleLine} className="sircle-line" alt="sircle-line" />
        </div>
      </header>
      <img
        src={phoneHeader}
        alt="Transaction History"
        className="transaction-hst"
      />

      <section>
        <aside className="about">
          <div className="about-top">
            <span>
              <span className="about-the">About</span> the Application.
            </span>
            <h6>
              We have some great features from the application and it's totally
              free <br /> to use by all users around the world.
            </h6>
          </div>
          <div className="about-desc">
            <div className="support">
              <div className="icons8">
                <img src={support} alt="Support" />
              </div>
              <span>24/7 Support</span>
              <h6>
                We have 24/7 contact support so you <br /> can contact us
                whenever you want <br /> and we will respond it.
              </h6>
            </div>
            <div className="data-privacy">
              <div className="icons8">
                <img src={dataPrivacy} alt="data-privacy" />
              </div>
              <span>Data Privacy</span>
              <h6>
                We make sure your data is safe in our <br /> database and we
                will encrypt any <br /> data you submitted to us.
              </h6>
            </div>
            <div className="easy-download">
              <div className="icons8">
                <img
                  src={easyDownload}
                  alt="easy-download"
                />
              </div>
              <span>Easy Download</span>
              <h6>
                Zwallet is 100% totally free to use it's <br /> now available on
                Google Play Store <br /> and App Store.
              </h6>
            </div>
          </div>
        </aside>
        <aside className="trusted-partner">
          <div className="tp-left">
            <span>
              100+ <span className="partner">Trusted </span> <br />
              Partners.
            </span>
            <h6>
              We have reached global level and have 100+ <br />
              brand partners around the globe.
            </h6>
          </div>
          <div className="tp-right">
            <img src={sponsor} alt="sponsorship" />
          </div>
        </aside>

        <aside className="thegreat">
          <div>
            <img src={phone2} alt="phone" />
          </div>
          <div className="great-features">
            <span className="zwallet-features">
              All The <span className="great">Great</span>
              <br />
              Zwallet Features.
            </span>
            <div className="thegreat123">
              <h5 className="gf123">
                <span className="no-great">1.</span> Small Fee
              </h5>
              <h5 className="text">
                We only charge 5% of every success transaction done in Zwallet
                app.
              </h5>
            </div>
            <div className="thegreat123">
              <h5 className="gf123">
                <span className="no-great">2.</span> Data Secured
              </h5>
              <h5 className="text">
                All your data is secured properly in our system and it's
                encrypted.
              </h5>
            </div>
            <div className="thegreat123">
              <h5 className="gf123">
                <span className="no-great">3.</span> User Friendly
              </h5>
              <h5 className="text">
                Zwallet come up with modern and sleek design and not
                complicated.
              </h5>
            </div>
          </div>
        </aside>

        <aside className="feedback">
          <div className="feedback-top">
            <span className="wuas">
              What Users are <span className="saying">Saying.</span>
            </span>
            <h5>
              We have some great features from the application and it’s totally
              free <br /> to use by all users around the world.
            </h5>
          </div>

          <div className="feedback-users">
            <div className="sherina">
              <div>
                <img src={sherina} alt="sherina" />
              </div>
              <span>Sherina Chaw</span>
              <h5>
                “I use this app since 2 years ago and <br /> this is the best
                app that I’ve ever use <br /> in my entire life”
              </h5>
            </div>
            <div className="jessica">
              <div>
                <img src={jessica} alt="jessica" />
              </div>
              <span>Jessica Mera</span>
              <h5>
                “I use Zwallet to manage all financial <br /> needs. It’s super
                easy to use and it’s <br /> 100% free app”
              </h5>
            </div>
            <div className="robert">
              <div>
                <img src={robert} alt="robert" />
              </div>
              <span>Robert Chandler</span>
              <h5>
                “Since I’m using this app, I’m not <br /> going to move to
                another similar app. <br /> Thank you Zwallet!”
              </h5>
            </div>
          </div>
        </aside>
      </section>

      <footer>
        <div className="logo-foot">
          <img src={dompetku} alt="logo dompetku" />
          <img src={dompetku2} alt="logo dompetku" />
        </div>
        <span>
          Simplify financial needs and saving <br /> much time in banking needs
          with <br /> one single app.
        </span>
        <img src={garisFooter} alt="garis footer" className="hr" />
        <div className="copyright">
          <div className="reserved">2020 iWallet. All right reserved.</div>
          <div className="contact">
            <span>+62 5637 8882 9901</span>
            <span>contact@zwallet.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
