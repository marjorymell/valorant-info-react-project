import React from "react";
import Agent from "../../components/Carousel/AgentCarousel";
import Arsenal from "../../components/Carousel/ArsenalCarousel";
import Banner from "../../components/Banner/Banner";
import Background from "../../components/Background/Background";
import { CarouselProvider } from "../../contexts/CarouselContext";

const Home = () => (
  <CarouselProvider>
    <Background>
      <Banner />
      <section style={{ marginTop: "50px" }}>
        <Agent />
        <Arsenal />
      </section>
    </Background>
  </CarouselProvider>
);

export default Home;
