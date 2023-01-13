import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Icons from "../icons/Index";
import { Link } from "react-router-dom";

const SliderEmotion = () => {
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
          <Button
            title="Home"
            type="button"
            onClick={() => {
              toggleSlider();
            }}
          >
            <Icons.Home style={{ width: "2em", height: "2em" }} />
          </Button>

          <div className="menu">
            <Link to={`/`}>Home</Link>
          </div>
        </MenuWrapper>
      </Slider>
    </>
  );
};

const Slider = styled.div`
  /* house keeping  */
  background: #d6204e;
  color: #000;
  font-size: 0.5em;
  margin-top: 3em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  /* remove from pageand keeps it on the top */
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  /* slider size */
  width: 24rem;
  height: 80vh;
  overflowy: auto;

  /* transition */
  transition: all 0.3s ease-in-out;
  /* closed state */

  transform: ${(props) =>
    props.className === "open" ? "translateX(0)" : "translateX(-100%)"};
`;

const Button = styled.button`
  position: absolute;
  top: 85%;
  left: 100%;
  height: 3em;
  width: 3em;
  padding: 0 0.5em 0 0.25em;
  background: #d6204e;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: none;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &.menu > *: {
    display: block;
    border-bottom: 1px solid #fff;
    text-decoration: none;
    font-size: 2em;
    border-radius: 0.5em;
    color: #fff;
    padding: 0.5em;
    margin: 0.5em;
    transform: scale(1);
  }
  .menu > *:hover {
    background: #fff;
    color: #d6204e;
  }

  .menu:active {
    transform: scale(0.9);
  }
`;

export default SliderEmotion;
