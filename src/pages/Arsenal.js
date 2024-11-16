import React from "react";
import Background from "../components/Background/Background";
import ArsenalPage from "../components/ArsenalPage/ArsenalPage";
import { BackgroundProvider } from "../contexts/Background";
import { BannerProvider } from "../contexts/Banner";
import { CarouselProvider } from "../contexts/Carousel";
import { ArsenalProvider } from "../contexts/ArsenalPage";

const Arsenal = () => {
  return (
    <BackgroundProvider>
      <BannerProvider>
        <CarouselProvider>
          <ArsenalProvider>
            <Background>
              <ArsenalPage />
            </Background>
          </ArsenalProvider>
        </CarouselProvider>
      </BannerProvider>
    </BackgroundProvider>
  );
};

export default Arsenal;
