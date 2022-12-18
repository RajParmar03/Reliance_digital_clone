import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ItemCard1 = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Box>
        <Slide>
          {type.map((i, index) => (
            <Box key={index}>
              <Image src={`${i.img}`} alt={i.caption} w="100%" />
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};

export default ItemCard1;
