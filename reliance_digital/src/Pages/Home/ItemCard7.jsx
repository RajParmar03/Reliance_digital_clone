import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";
import Heading from "./Heading";

const ItemCard7 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
      <Heading heading={heading} />
      <Flex mt="7">
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "70%", base: "100%" }}
        >
          <Slider type={type} />
        </Box>
        <Spacer />
        <Box
          boxSize="sm"
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "30%",
            base: "none",
          }}
        >
          <Image
            src={src}
            boxSize="340px"
            border="1px"
            borderColor="gray.200"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemCard7;
