import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar1";
import Main from "./page/Main";
import { Container } from "react-bootstrap";
import Skill from "./page/Skill";
import Offer from "./page/Offer";
import ImagePack from "./page/ImagePack";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "./page/Footer";
import { motion } from "framer-motion";
function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Container>
      <Navbar />
      <Main />
      <Skill />
      <Offer />
      <Footer />
    </Container>
  );
}

export default App;
