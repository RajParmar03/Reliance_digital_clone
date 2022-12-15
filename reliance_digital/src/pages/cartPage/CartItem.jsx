import React from "react";
import { Flex, Box, Image, Button, Heading } from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";
import {TbTruckDelivery} from "react-icons/tb";

const CartItem = () => {
  return (
    <Flex
      border={"1px solid rgb(224, 224, 225)"}
      flexDirection="column"
      width={"90%"}
      boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
      borderRadius="4px"
    >
      <Flex
        p={"16px"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justifyContent={{ sm: "center", base: "center" }}
        alignItems={{
          sm: "center",
          md: "normal",
          lg: "normal",
          xl: "normal",
          "2xl": "normal",
        }}
        gap={{ sm: "8px", base: "7px" }}
      >
        {/* //part1-17to 44line */}
        <Flex
          flexDirection="column"
          border={"0px solid blue"}
          justifyContent="center"
          alignItems={"center"}
          gap="2"
        >
          <Box>
            <Image
              src="https://www.reliancedigital.in/medias/One-Plus-10T-Mobile-Phone-493177297-i-1?context=bWFzdGVyfGltYWdlc3wxMjc4NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaGI2L2hkNi85ODY5OTI1NDQ5NzU4LmpwZ3wxN2IyZDRmOTdjYWRmMTNhOTRkZWM5ODE1YTJjYTM5MTM4OGU3YTJjY2RjMjM0YzdmNjhjZDUxYzZjYTA4ODI1"
              alt="Image"
              width="200px"
            />
          </Box>
          <Box display={"flex"} gap="2">
            <Button>-</Button>
            <Button
              backgroundColor={"white"}
              disabled="true"
              fontWeight={"bold"}
            >
              1
            </Button>
            <Button>+</Button>
          </Box>
        </Flex>
        {/* //part2-line 46 to 71 */}
        <Flex
          flexDirection={"column"}
          border={"0px solid green"}
          textAlign={{
            sm: "center",
            md: "left",
            lg: "left",
            xl: "left",
            "2xl": "left",
          }}
          gap={2}
        >
          <Heading
            fontSize="14px"
            color={" rgb(0, 51, 128)"}
            fontWeight="600"
            lineHeight={"1.1"}
          >
            OnePlus 10T 5G 128 GB, 8 GB RAM, Moonstone Black, Mobile Phone
          </Heading>
          <Heading
            fontSize="14px"
            color={"rgb(102, 102, 102)"}
            fontWeight="600"
            lineHeight={"1.1"}
          >
            1234567789
          </Heading>
          <Flex>
            <FcPlus/>
          <Heading fontSize="14px" color={"red"}>
           RECOMMENDED SERVICES/WARRANTY
          </Heading>
          </Flex>
        </Flex>
        {/* //part3- line 71 to 99*/}
        <Flex
          flexDirection={"column"}
          textAlign={{
            sm: "center",
            md: "right",
            lg: "right",
            xl: "right",
            "2xl": "right",
          }}
          gap={1}
          fontWeight="500"
        >
          <Heading fontSize="18px" color={"rgb(0, 0, 0)"}>
            ₹49,999
          </Heading>
          <Heading
            fontSize="14px"
            color={"rgb(21, 150, 124)"}
            lineHeight={"1.5"}
          >
            {" "}
            Free Shipping
          </Heading>
          <Flex justifyContent="flex-end">
            <TbTruckDelivery size={20}/>
          <Heading
            fontSize="13px"
            color={"rgb(0, 51, 128)"}
            lineHeight={"20px"}
          >
            Standard Delivery: 18 Dec (Sun)-20 Dec (Tue)
          </Heading>
          </Flex>
          <Heading fontSize="12px" color={"rgb(102, 102, 102)"}>
            *Delivery assurance is subject to our delivery locations staying
            open as per govt. regulations
          </Heading>
        </Flex>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        borderTop={"1px solid rgb(224, 224, 225)"}
        fontSize="13px"
        fontWeight={"500"}
        background="transparent"
      >
        <Box width={"49%"} borderRight="1px solid rgb(224, 224, 225)">
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
          >
            Remove
          </Button>
        </Box>
        <Box width={"49%"}>
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
          >
            Move to Wishlist
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
