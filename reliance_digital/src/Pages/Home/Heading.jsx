import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Heading = ({ heading }) => {
  return (
    <Flex gap="2">
      <Center>
        <Text fontSize="2xl">{heading}</Text>
        <Link to="/">
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#505d83",
            }}
          >
            VIEW ALL
          </Text>
        </Link>
      </Center>
    </Flex>
  );
};

export default Heading;
