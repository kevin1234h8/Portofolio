import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Application from "./Application";
import Contact from "./page/Contact";
import KleeImage from "./page/KleeImage";
import About from "./page/About";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoute from "./page/AnimatedRoute";
function App() {
  return (
    <Router>
      <AnimatedRoute />
    </Router>
  );
}

export default App;
