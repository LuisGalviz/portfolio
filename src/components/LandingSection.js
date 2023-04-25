import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import fotoPerfil from "../assets/profile.jpg";

const greeting = "Hello, I am Luis Fernando Galviz!";
const bio1 = "A Software Engineer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="home-section"
  >
    <Avatar
      size="2xl"
      name="Luis Fernando Galviz Corrales"
      src={fotoPerfil}
    ></Avatar>
    <VStack spacing={4}>
      <Heading as='h4' size='md'>{greeting}</Heading>
      <Heading as='h2' size='2xl'>{bio1}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
