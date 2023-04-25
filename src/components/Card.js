import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc, href }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card>
      <CardBody>
        <Image src={imageSrc} alt="" borderRadius="lg" />
        <VStack mt="6" spacing="3" align="start">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <a href={href} target="blank" ><HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack></a>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Cards;
