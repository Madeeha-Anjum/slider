import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div style={{ margin: "1em" }}>
        <h1>Different Ways to Write CSS in React</h1>
        <div>
          <h2>Importing external stylesheets</h2>
          <Link className="link" to={`/external-stylesheets`}>
            External Stylesheets
          </Link>
        </div>
        <div>
          <h2>Use CSS Modules</h2>
          <Link className="link" to={`/css-modules`}>
            CSS Modules
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
