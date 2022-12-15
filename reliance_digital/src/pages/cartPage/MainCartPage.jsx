import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";

const MainCartPage = () => {
  return (
    <div>
      <Box border={"1px solid black"} height="140px"></Box>
      <Flex
        border={"0px solid red"}
        margin="auto"
        width={"95%"}
        paddingX="20px"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Flex
          flexDirection={"column"}
          border={"0px solid blue"}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "70%",
            xl: "70%",
            "2xl": "70%",
          }}
          gap={"4"}
        >
          <MyCartLength />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Flex>
        <Flex
          border={"0px solid green"}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "30%",
            xl: "30%",
            "2xl": "30%",
          }}
        >
          <CheckoutBox />
        </Flex>
      </Flex>
    </div>
  );
};

export default MainCartPage;
