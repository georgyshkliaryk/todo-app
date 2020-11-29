import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import Nav from "./components/Nav/Header";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main /> 
      <Footer />
    </div>
  );
}

export default App;
