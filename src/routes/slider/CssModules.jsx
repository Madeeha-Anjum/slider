import React from "react";

import SliderCssModules from "../../components/slider/SliderCssModules";

const CssModules = () => {
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        <h1>CssModules</h1>
        <p>Slider using CSS Modules</p>
      </div>
      <SliderCssModules></SliderCssModules>
    </>
  );
};

export default CssModules;
