import React, { useState } from "react";
import styles from "./SliderCssModules.module.css";
import Icons from "../icons/index";
import { Link } from "react-router-dom";

const SliderCssModules = () => {
  const [isOpen, setIsOpen] = useState(false);
  // conditionally render the slide class
  const sliderClass = isOpen
    ? `${styles.slider} ${styles.open}`
    : `${styles.slider} ${styles.closed}`;

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={sliderClass}>
        <div className={styles["menu-wrapper"]}>
          <button
            title="Home"
            type="button"
            onClick={() => {
              toggleSlider();
            }}
            className={styles["menu-btn"]}
          >
            <Icons.Home style={{ width: "2em", height: "2em" }} />
          </button>

          <div className={styles.menu}>
            <Link to={`/`}>Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCssModules;
