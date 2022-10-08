import React from "react";
import Application from "../Application";
import Contact from "../page/Contact";
import KleeImage from "../page/KleeImage";
import About from "../page/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Application />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/klee" element={<KleeImage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoute;
