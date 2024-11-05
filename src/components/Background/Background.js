import React from "react";
import { useBackgroundContext } from "../../contexts/BackgroundContext";
import { BackgroundContainer, ContentWrapper } from "./BackgroundStyles";

const Background = ({ children }) => {
  const { gradient } = useBackgroundContext();

  return (
    <BackgroundContainer gradient={gradient}>
      <ContentWrapper>{children}</ContentWrapper>
    </BackgroundContainer>
  );
};

export default Background;
