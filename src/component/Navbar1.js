import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

import { Image } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";

function NavScrollExample() {
  const style = {
    backgroundColor: "#eeeff5",
    borderRadius: "1rem",
    opacity: "0.98",
  };
  const colorStyle = {
    color: "#112969",
  };
  return (
    <Navbar
      className="d-flex align-items-center"
      style={style}
      expand="lg"
      variant="light"
    >
      <Container fluid>
        <Navbar.Brand style={colorStyle} href="/">
          KEVIN
        </Navbar.Brand>
        <Navbar.Toggle
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "white",
            width: "20%",
          }}
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/about">About</Nav.Link>

            {<Nav.Link href="/contact">Contact</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.instagram.com/kevin1234h8/"
              target="_black"
            >
              {" "}
              <Image
                style={{
                  width: "48px",
                }}
                src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png"
              />
              <GitHubIcon />
              <Image
                style={{
                  width: "24px",
                  marginLeft: "12px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
