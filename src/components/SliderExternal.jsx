import React, { useState } from "react";
import Icons from "./icons/index";
import "./SliderExternal.css";
import { Link } from "react-router-dom";

const SliderExternal = () => {
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
            <Link to={`/`}>Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderExternal;
