import React from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/Background/Background";
import ItemHeader from "../../components/ItemDetails/ItemHeader";
import { BackgroundProvider } from "../../contexts/Background";
import { BannerProvider } from "../../contexts/Banner";
import { CarouselProvider } from "../../contexts/Carousel";
import { fetchAgentById } from "../../services/Agent";

const Agent = () => {
  const { agentId } = useParams();

  return (
    <BackgroundProvider>
      <BannerProvider>
        <CarouselProvider>
          <Background>
            <ItemHeader
              itemId={agentId}
              fetchItem={fetchAgentById}
              itemType="agent"
            />
          </Background>
        </CarouselProvider>
      </BannerProvider>
    </BackgroundProvider>
  );
};

export default Agent;
