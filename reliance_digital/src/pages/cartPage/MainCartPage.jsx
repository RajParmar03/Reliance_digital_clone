import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";

const MainCartPage = () => {
  return (
    <div >
      <Box border={"1px solid black"} height="140px"></Box>
      {/* <MyCartLength />
      <CartItem />
      <CheckoutBox/> */}
      <Flex border={"1px solid red"}>
        <Flex flexDirection={"column"} border={"1px solid blue"} width="70%" gap={"2"}>
          <MyCartLength />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Flex>
        <Flex border={"1px solid green"} width="30%">
          <CheckoutBox />
        </Flex>
      </Flex>
    </div>
  );
};

export default MainCartPage;
