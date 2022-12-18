import React from "react";
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const Slider = ({ type }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        660: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        749: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {type.map((i) => (
        <Box key={uuid()}>
          <SwiperSlide>
            <Link to={i.linked}>
              <Square m="auto" _hover={{ transform: "scale(1.1)" }}>
                <Image
                  src={`${i.img}`}
                  alt={i.name}
                  boxSize={{ base: "160px" }}
                />
              </Square>
              <Box p="2" mt="4">
                <Text
                  color="#275293"
                  noOfLines={2}
                  textAlign="left"
                  fontSize="15px"
                  w={{ xs: "80%", sm: "80%", base: "100px" }}
                  _hover={{ color: "red" }}
                >
                  {i.name}
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
                        ₹{i.price}
                      </Text>
                    </Square>
                  </Flex>
                  <Flex>
                    <Text color="gray.600" fontSize="14px">
                      MRP:{" "}
                    </Text>
                    {"  "}
                    <Text as="s" color="gray.600" fontSize="14px" ml="1">
                      ₹{i.mrp}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text color="gray.600" fontSize="14px">
                      You Save:{" "}
                    </Text>
                    {"  "}
                    <Text color="gray.600" fontSize="14px" ml="1">
                      {i.discount}
                    </Text>
                  </Flex>
                  <Box
                    borderRadius="xl"
                    border="1px"
                    borderColor="green.900"
                    w="100px"
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
            </Link>
          </SwiperSlide>
        </Box>
      ))}
    </Swiper>
  );
};

export default Slider;
