import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Center,
  Spacer,
  Square,
} from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ItemCard2 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto" mt="6" cursor="pointer">
      <Flex>
        <Center>
          <Text fontSize="2xl">
            {heading}
            <a
              href=""
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#505d83",
              }}
            >
              VIEW ALL
            </a>
          </Text>
        </Center>
      </Flex>
      <Flex mt="7">
        <Box boxSize="sm" w="24%" cursor="pointer">
          <Image
            src={src}
            boxSize="340px"
            border="1px"
            borderColor="gray.200"
          />
        </Box>
        <Spacer />
        <Box w="75%">
          <Slide>
            <Flex>
              {type.map((i, index) => (
                <Box>
                  <Square
                    key={index}
                    m="auto"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    <Image src={`${i.url}`} alt={i.caption} boxSize="160px" />
                  </Square>
                  <Box p="2" mt="4">
                    <Text
                      color="#275293"
                      noOfLines={2}
                      textAlign="left"
                      fontSize="15px"
                      _hover={{ color: "red" }}
                    >
                      Apple Watch SE GPS - 44 mm Silver Aluminium Case with
                      White 2nd Generation Sport Band
                    </Text>
                    <Box mt="2.5">
                      <Flex>
                        <Square>
                          <Text color="gray.600" fontSize="14px">
                            Deal Price:{" "}
                          </Text>
                        </Square>
                        <Square>
                          <Text fontWeight="600" fontSize="18px" ml="1">
                            ₹32,240.00
                          </Text>
                        </Square>
                      </Flex>
                      <Flex>
                        <Text color="gray.600" fontSize="14px">
                          MRP:{" "}
                        </Text>
                        {"  "}
                        <Text as="s" color="gray.600" fontSize="14px" ml="1">
                          ₹32,900.00
                        </Text>
                      </Flex>
                      <Flex>
                        <Text color="gray.600" fontSize="14px">
                          You Save:{" "}
                        </Text>
                        {"  "}
                        <Text color="gray.600" fontSize="14px" ml="1">
                          5% (₹600.00)
                        </Text>
                      </Flex>
                      <Box
                        borderRadius="xl"
                        border="1px"
                        borderColor="green.900"
                        w="40%"
                        color="green.500"
                        bg="green.50"
                        mt="2"
                        textAlign="center"
                      >
                        <Text fontSize="10px" fontWeight="500">
                          OFFERS AVAILABLE
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Slide>
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemCard2;
