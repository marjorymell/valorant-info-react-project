import React from "react";
import Agent from "./Agent";
import Arsenal from "./Arsenal";
import Banner from "../../components/Banner/Banner";

const HomePage = () => (
  <div>
    <section>
      <Banner />
    </section>
    <section style={{ marginTop: "50px" }}>
      <Agent />
      <Arsenal />
    </section>
  </div>
);

export default HomePage;
