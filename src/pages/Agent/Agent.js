import React from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/Background/Background";
import AgentPage from "../../components/AgentPage/AgentPage";
import { BackgroundProvider } from "../../contexts/Background";
import { BannerProvider } from "../../contexts/Banner";
import { CarouselProvider } from "../../contexts/Carousel";

const Agent = () => {
  const { agentId } = useParams();

  return (
    <BackgroundProvider>
      <BannerProvider>
        <CarouselProvider>
          <Background>
            <AgentPage agentId={agentId} />
          </Background>
        </CarouselProvider>
      </BannerProvider>
    </BackgroundProvider>
  );
};

export default Agent;
