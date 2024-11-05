import React from "react";
import { useBannerContext } from "../../contexts/BannerContext";
import { BannerContainer, StartButton, Image } from "./BannerStyles";

const Banner = () => {
  const { bannerImages, buttonText } = useBannerContext();

  return (
    <BannerContainer>
      <Image src={bannerImages.valorant} alt="Valorant" />
      <Image src={bannerImages.info} alt="Info" />
      <StartButton>{buttonText}</StartButton>
    </BannerContainer>
  );
};

export default Banner;
