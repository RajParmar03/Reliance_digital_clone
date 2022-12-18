import React from "react";
import { Box, Grid, Flex, Text, Image, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ItemCard6 = ({ type, heading }) => {
  return (
    <Box mb="2" cursor="pointer">
      <Center>
        <Text fontSize="xl" color="#003380" fontWeight="700" p="4">
          {heading}
        </Text>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        w="98%"
        m="auto"
      >
        {type.map((i, index) => (
          <Flex
            key={i + 1}
            border="1px"
            borderColor="gray.200"
            flexDirection="column"
            backgroundColor="#f7f7f7"
            borderRadius="md"
            p="1"
          >
            <Link to="/">
              <Center>
                <Image boxSize="40px" src={`${i.img}`} alt={i.name} />
              </Center>
              <Center>
                <Text color="#003380" fontSize="sm" fontWeight="700">
                  {i.title}
                </Text>
              </Center>
              <Center>
                <Text fontSize="10px" color="gray.600">
                  {i.desc}
                </Text>
              </Center>
            </Link>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemCard6;
