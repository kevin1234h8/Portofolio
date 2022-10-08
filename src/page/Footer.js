import React, { useEffect } from "react";
import Button1 from "../component/Button1";
import { Image } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../style/footer.css";
import { Link } from "react-router-dom";
import Aos from "aos";
const Footer = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div data-aos="zoom-in-up" className="footer text-center">
      <div className="h1">Have a project in mind ? </div>
      <Link to={"/contact"}>
        <Button1 text={"Contact me"} />
      </Link>

      <div className="reach">Reach out for collaboration or say hi at</div>
      <div className="contact-footer">
        <div className="footer-link">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVlCWndgKbdKffqTVMHkBrmHdnkGrKBtBVmjjdSfMpjShjFPPkgHPxtwPWqHnCcJfppbKk"
            className="email"
          >
            kevinang445566@gmail.com
          </a>
        </div>
        <div className="footer-link">
          <a
            className="email"
            href="https://wa.me/06285831705842?text=Hello"
            target={"_blank"}
          >
            Whatsapp
          </a>
        </div>
      </div>

      <div>
        <a target="_blank" href="https://www.instagram.com/kevin1234h8/">
          <Image
            style={{
              width: "48px",
            }}
            src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/kevin1234h8?tab=repositories"
        >
          <GitHubIcon />
        </a>
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVlCWndgKbdKffqTVMHkBrmHdnkGrKBtBVmjjdSfMpjShjFPPkgHPxtwPWqHnCcJfppbKk"
        >
          <Image
            style={{
              width: "24px",
              marginLeft: "12px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
          />
        </a>
      </div>
      <div className="credit my-3">Credits</div>
    </div>
  );
};

export default Footer;
