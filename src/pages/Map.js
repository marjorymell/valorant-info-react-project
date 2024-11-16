import React from "react";
import Background from "../components/Background/Background";
import MapPage from "../components/MapPage/MapPage";
import { MapProvider } from "../contexts/Map";
import { BackgroundProvider } from "../contexts/Background";
import { BannerProvider } from "../contexts/Banner";
import { CarouselProvider } from "../contexts/Carousel";

const Map = () => {
  return (
    <BackgroundProvider>
      <BannerProvider>
        <CarouselProvider>
          <MapProvider>
            <Background>
              <MapPage />
              <div style={{ marginBottom: "100px" }} />
            </Background>
          </MapProvider>
        </CarouselProvider>
      </BannerProvider>
    </BackgroundProvider>
  );
};

export default Map;
