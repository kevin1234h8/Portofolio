import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button1 from "../component/Button1";
import datas from "../data/ContactData.json";
import Button from "../component/contactButton";
import interests from "../data/interest.json";
import prices from "../data/price.json";
import "../style/contact.css";
import Footer from "./Footer";
import Navbar1 from "../component/Navbar1";
import TextArea from "../component/TextArea";
const Contact = () => {
  const [value, setValue] = useState(false);
  console.log(value);
  const handleClick = (e) => {
    setValue(e.target.value);
  };

  const style = {
    width: "100%",
    color: "#112969",
  };
  return (
    <Container>
      <Navbar1 />
      <Row className="contact-wrapper">
        <div className="d-flex align-items-center justify-content-between my-4 contain">
          <div className="contact ">Contact</div>
          <div>
            Interested in working with me?
            <br /> Submit your project inquiry using the <br /> form below
          </div>
        </div>
        {datas.map((data, index) => {
          return (
            <div className="my-3 wrapper" key={index}>
              <div className="name mb-3">{data.type}</div>
              <div className="contact-button mb-3">
                {data.button.map((btn, index) => {
                  return (
                    <div key={index}>
                      <Button
                        value={btn.name}
                        text={btn.name}
                        handleClick={handleClick}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}{" "}
        <div className="my-3 wrapper">
          <div className="name">Interest in ...</div>
          <select className="option" name="" id="">
            {interests.button.map((btn) => {
              return <option value="">{btn.name}</option>;
            })}
          </select>
        </div>
        {/* <div className="my-3 wrapper">
          <div className="name">Project budget (USD)</div>
          <select className="option" name="" id="">
            {prices.button.map((btn) => {
              return <option value="">{btn.name}</option>;
            })}
          </select>
        </div> */}
        <small className="text-muted">
          If you from Upwork , we can discuss there , no need to fill the form .
          the price also negotiable
        </small>
        <div>
          <Button1 text={"Send request"} />
        </div>
      </Row>
      <Footer />
    </Container>
  );
};

export default Contact;
