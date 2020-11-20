import React from "react";
import "./styles.css";
import "./reset.css";

import Header from "./Header";
import FirstView from "./FirstView";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <FirstView />
      <Header />
      <About />
    </div>
  );
}
