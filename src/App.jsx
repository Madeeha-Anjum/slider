import React, { useState } from "react";
import Icons from "./components/icons/index";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // conditionally render the slide class
  const sliderClass = isOpen ? "slider open" : "slider closed";
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={sliderClass}>
        <div className="menu-wrapper">
          <button
            title="Home"
            type="button"
            onClick={() => {
              toggleSlider();
            }}
            className="menu-btn"
          >
            <Icons.Home style={{ width: "2em", height: "2em" }} />
          </button>

          <div className="menu">
            <h1>React App</h1>
            <h1>React App</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
