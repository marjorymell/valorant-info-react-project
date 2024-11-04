import React from "react";
import Agent from "./Agent";
import Banner from "../../components/Banner/Banner";

const HomePage = () => (
  <div>
    <section>
      <Banner />
    </section>
    <section style={{ marginTop: "50px" }}>
      <Agent />
    </section>
  </div>
);

export default HomePage;
