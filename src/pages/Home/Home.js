import React from "react";
import AgentCarousel from "../../components/Carousel/AgentCarousel";
import ArsenalCarousel from "../../components/Carousel/ArsenalCarousel";
import Maps from "../../components/Carousel/MapsCarousel";
import Banner from "../../components/Banner/Banner";
import Background from "../../components/Background/Background";
import { CarouselProvider } from "../../contexts/CarouselContext";
import { BackgroundProvider } from "../../contexts/BackgroundContext";
import { BannerProvider } from "../../contexts/BannerContext";

const Home = () => (
  <BackgroundProvider>
    <BannerProvider>
      <CarouselProvider>
        <Background>
          <Banner />
          <section>
            <AgentCarousel />
            <ArsenalCarousel />
            <Maps />
          </section>
        </Background>
      </CarouselProvider>
    </BannerProvider>
  </BackgroundProvider>
);

export default Home;
