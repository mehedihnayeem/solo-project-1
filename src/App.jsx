import React from "react";
import "./App.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Buttons />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
