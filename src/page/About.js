import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style/about.css";
import ProfilePicture from "../assets/profile.png";
import Navbar1 from "../component/Navbar1";
import Footer from "../page/Footer";
const About = () => {
  return (
    <Container>
      <Navbar1 />
      <Row className="text-center">
        <div className="h1 mt-5">
          Designing meaningful experiences for brands & businesses
        </div>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center justify-content-center profile-wrapper">
            <div className="profile-box">
              <div className="profile-content">
                <img className="profile-image" src={ProfilePicture} alt="" />
                <div className="profile-text">
                  <h1 className="text-white">KEVIN</h1>
                  <p className="text-white">
                    High School Graduated Student , and curiosity dragged me to
                    learn HTML & CSS. Then, I learned UX/UI design, Reactjs and
                    among many other things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default About;
