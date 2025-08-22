import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 
  return (
    <VStack  backgroundColor="white" borderRadius="md" alignItems="flex-start">
      <Image src={imageSrc} alt={title} borderRadius="md"/>
      <Heading as="h3" color="black" size="sm" margin="10px">{title}</Heading>
      <Text id ={description }color="gray.600" size="sm" margin="10px">{description}</Text>
      <HStack spacing={2} marginTop={2}>
        <Text color="black">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
      </HStack>
      
    </VStack>
     

  );
};

export default Card;
