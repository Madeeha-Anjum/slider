import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home.jsx";
import ExternalStylesheets from "./routes/slider/ExternalStylesheets";
import CssModules from "./routes/slider/CssModules";
import StyledComponents from "./routes/slider/StyledComponents";
import Slider from "./routes/slider/Index.jsx";
import Emotion from "./routes/slider/Emotion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="slider">
          <Route index element={<Slider />} />
          <Route
            path="external-stylesheets"
            element={<ExternalStylesheets />}
          />
          <Route path="css-modules" element={<CssModules />} />
          <Route path="styled-components" element={<StyledComponents />} />
          <Route path="emotion" element={<Emotion />} />
        </Route>
      </Routes>
      <div style={{ marginTop: "100vh" }}></div>
    </>
  );
}

export default App;
