import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: lfgalviz@hotmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/LuisGalviz",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/lfgalviz/",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const boxRef = useRef(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    transitionProperty: "transform",
    transitionDuration: ".3s",
    transitionTimingFunction: "ease-in-out",
    backgroundColor: "#18181b",
    transform: visible ? "translateY(0)" : "translateY(-200px)",
    zIndex: 10,
  };

  return (
    <Box ref={boxRef} style={style}>
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((link, index) => (
              <a
                key={index}
                target="_blank"
                href={link.url}
                style={{ marginRight: "2em" }}
              >
                <FontAwesomeIcon icon={link.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#home" onClick={handleClick("home")}>
                Home
              </a>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
