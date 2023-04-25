import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "./Card";

const projects = [
  {
    title: "student prospects",
    description:
      "Web page designed for aspiring students of the Universidad Del Norte",
    getImageSrc: () => require("../assets/aspirantes.png"),
    href:'https://aspirantes.uninorte.edu.co'
  },
  {
    title: "Jammming",
    description:
      "Aa web application connected to Spotify that allows you to create a list of songs and save them to your profile",
    getImageSrc: () => require("../assets/jammming.png"),
    href:'https://lfgalviz-spotify.netlify.app/'
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Cards
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            href={project.href}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
