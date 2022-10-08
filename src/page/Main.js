import React, { useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Typical from "react-typical";
import MainImage from "../assets/portfolioImage.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import Instagram from "../assets/download.svg";
import badgeInstagram from "../assets/badgeInstagram.svg";
import badgeGmail from "../assets/badgeGmail.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Gmail from "../assets/gmail.svg";
import github from "../assets/github.svg";
import githubBadge from "../assets/githubBadge.png";
import "../style/main.css";
const Main = () => {
  const iconImage = {
    width: "20px",
  };

  const colorStyle = {
    color: "#112969",
  };
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <Container data-aos="fade-right" className="mt-5">
      <Row className="d-flex align-items-center justify-content-center text-center">
        <Col>
          <div style={colorStyle} className="h2">
            Junior Web Developer ,<br /> Illustrator
          </div>
          <small className="text-muted">Specialised in</small>
          <div style={colorStyle}>Websites & Anime Illustration</div>
        </Col>
      </Row>
      <div className="social-media">
        <div>
          <a
            className="instagram"
            href="https://www.instagram.com/kevin1234h8/"
            target="_blank"
          >
            <img className="img" src={Instagram} alt="" />
            <img className="instagramBadge" src={badgeInstagram} alt="" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/kevin1234h8?tab=repositories"
            target="_blank"
          >
            <img
              style={{
                width: "5rem",
              }}
              src={github}
              alt=""
            />
          </a>
        </div>
        <div>
          <a
            className="gmail"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVlCWndgKbdKffqTVMHkBrmHdnkGrKBtBVmjjdSfMpjShjFPPkgHPxtwPWqHnCcJfppbKk"
            target="_blank"
          >
            <img className="img" src={Gmail} alt="" />
            <img className="badgeGmail" src={badgeGmail} alt="" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Main;
