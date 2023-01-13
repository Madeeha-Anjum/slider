import React, { useState } from "react";
import Icons from "../icons/index";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SliderStyledComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  // conditionally render the slide class
  const sliderClass = isOpen ? "open" : " ";

  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Slider className={sliderClass}>
        <MenuWrapper>
          <MenuButton
            title="Home"
            type="button"
            onClick={() => {
              toggleSlider();
            }}
          >
            <Icons.Home style={{ width: "2em", height: "2em" }} />
          </MenuButton>

          <div className="menu">
            <Link to={`/`}>Home</Link>
          </div>
        </MenuWrapper>
      </Slider>
    </>
  );
};

export default SliderStyledComponents;

const Slider = styled.div({
  /* house keeping  */
  background: "#d6204e",
  color: "#000",
  fontSize: " 0.5em",
  marginTop: "3em",
  borderTopRightRadius: " 0.5em",
  borderBottomRightRadius: " 0.5em",
  /* remove from pageand keeps it on the top */
  position: "fixed",
  zIndex: "1",
  top: "0",
  left: "0",

  /* slider size */
  width: " 24rem",
  height: "80vh",
  overflowy: "auto",
  /* transition */
  transition: "all 0.3s ease-in-out",

  /* closed state */
  transform: "translateX(-100%)",
  /* open state */
  "&.open": {
    transform: "translateX(0)",
  },
});

const MenuWrapper = styled.div({
  position: "relative",
  width: " 100%",
  height: "100%",

  "& .menu > *": {
    display: " block",
    borderBottom: "1px solid #fff",
    textDecoration: "none",
    fontSize: "2em",
    borderRadius: "0.5em",
    color: "#fff",
    padding: "0.5em",
    margin: "0.5em",
    transform: "scale(1)",
  },
  "& .menu > *:hover": {
    background: "#fff",
    color: "#d6204e",
  },
  " & .menu > *:active": {
    transform: "scale(0.9)",
  },
});

const MenuButton = styled.button({
  position: "absolute",
  top: "85%",
  left: "100%",
  height: "3em",
  width: "3em",
  padding: " 0 0.5em 0 0.25em",
  background: " #d6204e",
  borderTopRightRadius: " 50%",
  borderBottomRightRadius: "50%",
  border: "none",
  cursor: "pointer",
});
