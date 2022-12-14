import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

const ItemCard4 = ({ type, heading }) => {
  return (
    <Box>
      <Box justifyContent="left" w="95%" m="auto" mt="6">
        <Text fontSize="2xl" borderColor="black.900" textAlign={"left"}>
          {heading}
        </Text>
      </Box>
      <br />
      <br />
      <Grid  templateColumns='repeat(4, 1fr)' gap={6} w="95%" m="auto">
        {type.map((i, index) => (
          <Box key={index}>
            <Image src={`${i.url}`} alt={i.caption} w="100%" />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemCard4;
