import React from "react";
import { Box, Flex, Text, Image, Square, Center } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ItemCard5 = ({ type, heading }) => {
  return (
    <Box justifyContent="left" w="95%" m="auto" mt="6">
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
      <Box mt="1">
        <Slide>
          <Flex>
            {type.map((i, index) => (
              <Box>
                <Square key={index} m="auto">
                  <Image src={`${i.url}`} alt={i.caption} boxSize="160px" />
                </Square>
                <Box p="2" mt="4">
                  <Text
                    color="#275293"
                    noOfLines={2}
                    textAlign="left"
                    fontSize="15px"
                  >
                    Orient Convector HC2004D Fan-based Room Heater with
                    Twin-Fans, Black
                  </Text>
                  <Box mt="2.5">
                    <Flex>
                      <Square>
                        <Text color="gray.600" fontSize="14px">
                          Offer Price:{" "}
                        </Text>
                      </Square>
                      <Square>
                        <Text fontWeight="600" fontSize="18px" ml="1">
                          ₹2,299.00
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
                        42% (₹1,691.00)
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
    </Box>
  );
};

export default ItemCard5;
