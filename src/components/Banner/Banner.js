import React from "react";
import { BannerContainer, StartButton, Image } from "./BannerStyles";
import valorant from "./../../assets/images/valorant.png";
import info from "./../../assets/images/info.png";

const Banner = () => {
  return (
    <BannerContainer>
      <Image src={valorant} alt="Valorant" />
      <Image src={info} alt="Info" />
      <StartButton>START</StartButton>
    </BannerContainer>
  );
};

export default Banner;
