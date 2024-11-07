import React from "react";
import { useBannerContext } from "../../contexts/BannerContext";
import {
  BannerContainer,
  StartButton,
  Image,
  AnimatedBackground,
} from "./BannerStyles";

const Banner = () => {
  const { bannerImages, buttonText } = useBannerContext();

  return (
    <BannerContainer>
      <AnimatedBackground />
      <Image
        src={bannerImages.valorant}
        alt="Valorant"
        className="valorant-logo"
      />
      <Image src={bannerImages.info} alt="Info" className="info-image" />
      <StartButton>{buttonText}</StartButton>
    </BannerContainer>
  );
};

export default Banner;
