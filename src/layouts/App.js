import React from "react";
import Section from "../components/Section";
import Nav from "./Nav";
import "../styles/App.css";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <section>
          <Section />
        </section>
        <Nav />
      </div>
    </Router>
  );
};

export default App;
