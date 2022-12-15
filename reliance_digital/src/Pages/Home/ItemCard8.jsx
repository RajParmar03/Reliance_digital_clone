import React from "react";
import {
  Box,
  Text,
  Image,
  Square,
  Center,
  Button,
  Grid,
} from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ItemCard8 = ({ type, heading }) => {
  return (
    <Box
      justifyContent="left"
      m="auto"
      mt="6"
      backgroundColor="#f7f7f7"
      cursor="pointer"
    >
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mt="5">
          {heading}
        </Text>
      </Center>
      <br />
      <br />
      <br />
      <Box mt="1">
        <Slide>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} w="90%" m="auto">
            {type.map((i, index) => (
              <Box>
                <Square key={index} m="auto">
                  <Image src={`${i.url}`} alt={i.caption} boxSize="170px" />
                </Square>
                <br />
                <br />
                <Center>
                  <Text fontSize="xl" _hover={{ color: "#003380" }}>
                    {i.categories}
                  </Text>
                </Center>
              </Box>
            ))}
          </Grid>
        </Slide>
      </Box>
      <br />
      <Center>
        <Button
          background="#003380"
          color="whiteAlpha.900"
          borderRadius="3xl"
          border="1px"
          p="5"
          _hover={{
            background: "whiteAlpha.900",
            color: "#003380",
            borderRadius: "3xl",
            p: "5",
            border: "1px",
            variant: "outline",
          }}
        >
          <Text fontSize="xl" fontWeight="200">
            View All
          </Text>
        </Button>
      </Center>
      <br />
    </Box>
  );
};

export default ItemCard8;
