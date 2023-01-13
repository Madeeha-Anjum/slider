import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section style={{ margin: "1em auto", width: "720px" }}>
        <div style={{ padding: "1em" }}>
          <div>
            <h1>Different Ways to Write CSS in React</h1>
            <Link className="link" to={"/slider"}>
              Check out the slider
            </Link>
          </div>
          <div>
            <h1>...</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
