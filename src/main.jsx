import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ margin: "1em" }}>
      <h1>Different Ways to Write CSS in React</h1>
      <div>
        <p>Importing external stylesheets</p>
      </div>
    </div>
    <div style={{ marginTop: "100vh" }}></div>

    <App />
  </React.StrictMode>
);
