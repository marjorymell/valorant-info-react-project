import React from "react";
import AgentCarousel from "../../components/Carousel/AgentCarousel";
import Arsenal from "../../components/Carousel/ArsenalCarousel";
import Maps from "../../components/Carousel/MapsCarousel";
import Banner from "../../components/Banner/Banner";
import Background from "../../components/Background/Background";
import { CarouselProvider } from "../../contexts/CarouselContext";

const Home = () => (
  <CarouselProvider>
    <Background>
      <Banner />
      <section>
        <AgentCarousel />
        <Arsenal />
        <Maps />
      </section>
    </Background>
  </CarouselProvider>
);

export default Home;
