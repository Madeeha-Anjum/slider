import React from "react";
import SliderExternal from "../../components/slider/SliderExternal";

const ExternalStylesheets = () => {
  return (
    <>
      <SliderExternal />

      <div
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        <h1>External Stylesheets</h1>
        <p>Slider created using External style sheet</p>
      </div>
    </>
  );
};

export default ExternalStylesheets;
