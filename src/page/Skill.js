import React, { useEffect } from "react";
import { Image, Col, Row } from "react-bootstrap";
import kleeImage from "../assets/klee.png";
import { Link } from "react-router-dom";
import Aos from "aos";
const Skill = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <Row data-aos="zoom-in-up" className="my-3">
      <Col md={6} sm={12}>
        <Image
          className="img-fluid rounded-5"
          src={
            "https://images.unsplash.com/photo-1542837336-d14bdf342f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"
          }
        />
        <div className="h3 mt-4">Unbuild</div>
        <div>Web development</div>
      </Col>
      <Col md={6} sm={12}>
        <Link to="/klee">
          <Image className="img-fluid rounded-5" src={kleeImage} />
        </Link>

        <div className="h3 mt-4">Anime Illustration</div>
        <div>Genshin Impact</div>
      </Col>
      <Col>
        <Image />
      </Col>
    </Row>
  );
};

export default Skill;
