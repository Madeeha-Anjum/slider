import React from "react";
import SliderStyledComponents from "../../components/slider/SliderStyledComponents";

const StyledComponents = () => {
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        <h1>Styled Components</h1>
        <div>Install styled-components: </div>
        <li>
          <code>npm install styled-components --save </code>
        </li>
        <li>
          <code>import styled from 'styled-components'; </code>
        </li>
      </div>
      <SliderStyledComponents />
    </>
  );
};

export default StyledComponents;
