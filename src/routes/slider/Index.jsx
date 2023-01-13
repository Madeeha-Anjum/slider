import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const Index = () => {
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          width: "720px",
        }}
      >
        <div>
          <h2>1. Importing external stylesheets</h2>
          <Link className="link" to={`/slider/external-stylesheets`}>
            External Stylesheets
          </Link>
        </div>
        <div>
          <h2>2. Use CSS Modules</h2>
          <Link className="link" to={`/slider/css-modules`}>
            CSS Modules
          </Link>
        </div>
        <div>
          <h2>3. Styled Components </h2>
          <Link className="link" to={`/slider/styled-components`}>
            Styled Components
          </Link>
        </div>
        <div>
          <h2>4. Css in js libraries: Emotion </h2>
          <Link className="link" to={`/slider/emotion`}>
            Emotion
          </Link>
        </div>
      </div>
    </>
  );
};
export default Index;
