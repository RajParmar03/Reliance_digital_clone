import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

const MyCartLength = () => {
  return (
    <div>
      <Flex
        border={"1px solid rgb(224, 224, 225)"}
        backgroundColor="rgb(255, 255, 255)"
        boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
        borderRadius="4px"
        padding={"16px"}
        marginBottom="8px"
        width={"90%"}
        justifyContent="space-between"
        marginTop={"20px"}
        marginLeft="40px"
      >
        <Box>
          <Heading fontWeight={600} fontSize="16px">
            My Cart (3 Items)
          </Heading>
        </Box>
        <Box>
          <Heading fontWeight={600} fontSize="16px">
            Shipping to: 400022
          </Heading>
        </Box>
      </Flex>
    </div>
  );
};

export default MyCartLength;
