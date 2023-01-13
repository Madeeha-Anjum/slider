import React from "react";
import SliderEmotion from "../../components/slider/SliderEmotion";

const Emotion = () => {
  return (
    <>
      <SliderEmotion />

      <div
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        <h1>Emotion</h1>
        <p>Slider created using a css in javascript library called Emotion</p>
        <code>npm install --save @emotion/react</code>
      </div>
    </>
  );
};

export default Emotion;
