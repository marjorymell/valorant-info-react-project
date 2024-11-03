import React from "react";
import { BackgroundContainer, ContentWrapper } from "./BackgroundStyles";

const Background = ({ children }) => {
  return (
    <BackgroundContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </BackgroundContainer>
  );
};

export default Background;
