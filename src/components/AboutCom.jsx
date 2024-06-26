import React, {useEffect} from "react";

import "./AboutComStyle.css";

import Whychoose from "./Whychoose";
import Footer from "../components/Footer";

import masterimg from "../Images/masterimg.png";
import bachelorimg from "../Images/bachelorimg.png";
import associateimg from "../Images/associateimg.png";

import profit from "../Images/profit.png";
import structure from "../Images/structure.png";
import test from "../Images/test.png";

import { removeArrow1 } from "../Data.js";
import { feedbackHeadingBox } from "../Data.js";
import { feedbackResponsive } from "../Data.js";
import Slider from "./Slider";
import { feedbackData } from "../Data.js";
import StudentFeedback from "./StudentFeedack";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const feedbackList = feedbackData.map((item) => (
    <StudentFeedback
      image={item.image}
      description={item.description}
      name={item.studentName}
      position={item.position}
      key={item.id}
    />
  ));
  useEffect(() => {
    window.scrollTo(0, 0); 
    AOS.init({ duration: 2000 }); 
  }, []);
  return (
    <div>
      <div className="aboutImage">
        <h1>About us</h1>
      </div>
      <div className="subNav-containers">
        <div className="headings">
          <h2>About Us</h2>
        </div>
        <div className="contact-element">
          <ul>
            <li>
            <NavLink to="/" activeclassname="active">
                  Home
                </NavLink>
            </li>
            <li>
              <i className="fa fa-greater-than"></i>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="university-container">
          <div className="welcome-uni" data-aos ="fade-up">
            <div className="uni-text" data-aos ="fade-up">
              <h1>Welcome To Our University</h1>
              <p>
              Congratulations on joining our university family! As you embark on this journey, remember that your time here is not just about acquiring knowledge, but about discovering your passions and shaping your future
              </p>
            </div>
          </div>

          <div className="degree">
            <div className="degree-content">
              <div class="deg">
                <img src={masterimg} alt="" class="img" />
                <div class="text" data-aos ="fade-left">
                  <h4>ASSOCIATE’S DEGREE</h4>
                  <p>
                    You would see the biggest gift would be from me and the card
                    attached would say thank you for being a friend.
                  </p>
                </div>
              </div>

              <div class="deg">
                <img src={bachelorimg} alt="" class="img" />
                <div class="text" data-aos ="fade-left">
                  <h4>BACHELOR’S DEGREE</h4>
                  <p>
                    On your mark get set and go now. Got a dream and we just
                    know now we're gonna make our dream come true.
                  </p>
                </div>
              </div>

              <div class="deg">
                <img src={associateimg} alt="" class="img" />
                <div className="text" data-aos ="fade-left">
                  <h4 className="mar-text">MASTER’S DEGREE</h4>
                  <p className="mar-text">
                    Just sit right back and you'll hear a tale a tale of a
                    fateful trip that started from this tropic port aboard this
                    tiny ship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Whychoose />
      <div className="principle-container">
        <div className="principle-title">
          <h1>Our Principles & Practices</h1>
          <p>Why we are unique from others</p>
        </div>

        <div className="principle-image">
          <div className="profit" data-aos ="zoom-in">
            <img src={profit} alt="" />
            <h3>Not For Profit</h3>
          </div>

          <div className="profit" data-aos ="zoom-in">
            <img src={structure} alt="" />
            <h3>Course Structure</h3>
          </div>

          <div className="profit" data-aos ="zoom-in">
            <img src={test} alt="" />
            <h3>Test Preparation</h3>
          </div>
        </div>
      </div>

      <div className="applycontainer">
        <div className="applymain">
          <div className="applytext">
            <h3>Do You Want To Join With US !</h3>
            <p>
              Makin their way the only way they know how. That's just a little
              bit more than the law will allow.
            </p>
          </div>
          <div className="applybtn">
            <NavLink to="/RegistrationPage" activeclassname="active">
              Apply Now
            </NavLink>
          </div>
        </div>
      </div>
      <Slider
        CourseList={feedbackList}
        heading={feedbackHeadingBox.heading}
        description={feedbackHeadingBox.description}
        responsive={feedbackResponsive}
        removeArrow={removeArrow1}
      />
      <Footer />
    </div>
  );
};

export default About;
