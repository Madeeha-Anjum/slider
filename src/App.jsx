import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{ margin: "1em" }}>
        <h1>Different Ways to Write CSS in React</h1>
        <div>
          <h2>Importing external stylesheets</h2>
          <Link
            to={`/external-stylesheets`}
            style={{
              color: "red",
              border: "1px solid black",
              borderRadius: "0.5em",
              padding: "0.5em",
              backgroundColor: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            External Stylesheets
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
