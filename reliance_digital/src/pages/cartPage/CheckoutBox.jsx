import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Divider,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CheckoutBox = ({
  items,
  totalPrice,
  paybalPrice,
  discount,
  setVal,
  handleApply,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleCheckout = () => {
    if (items === 0) {
      toast({
        title: "Please login and add items to cart",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/Login");
      }, 1500);
    } else {
      toast({
        title: "Proceed further for checkout",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/checkout");
      }, 1500);
    }
  };

  return (
    <div>
      <Flex
        flexDirection={"column"}
        backgroundColor="rgb(255, 255, 255)"
        gap={"5"}
        padding={"16px"}
      >
        <Flex>
         
          <Button
            width={"100%"}
            color="white"
            backgroundColor={"red"}
            textAlign="center"
            onClick={handleCheckout}
          >
            CHECKOUT
          </Button>
       
        </Flex>
        <Flex
          flexDirection={"column"}
          border={"1px solid rgb(224, 224, 225)"}
          boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
          borderRadius="4px"
          padding={"16px"}
        >
          <Box>To avail discount use coupon code : MASAI40</Box>
          <Flex>
            <Box marginTop={"20px"} width={"100%"}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Coupon Code"
                  onChange={(e) => setVal(e.target.value)}
                />
                <InputRightElement width="4rem">
                  <Button
                    h="2.30rem"
                    size="sm"
                    borderRadius={"none"}
                    color="rgb(54,129,240)"
                    backgroundColor="white"
                    borderLeft={"4px solid rgb(54,129,240)"}
                    borderRight={"1px solid rgb(224, 224, 225)"}
                    onClick={handleApply}
                  >
                    Apply
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>
          <Divider width={"90%"} marginTop={"20px"} />
          <Flex flexDirection={"column"} gap="10px">
            <Box width="90%" margin="auto" marginTop={"20px"}>
              <Text fontWeight="bold" textAlign="left">
                PRICE DETAILS
              </Text>

              <Flex justifyContent="space-between">
                <Text>Price ({items} Items)</Text>
                <Text>₹{totalPrice}</Text>
              </Flex>

              <Flex justifyContent="space-between">
                <Text>Delivery Charges</Text>
                <Text color="green">FREE</Text>
              </Flex>

              <Divider />

              <Flex justifyContent="space-between">
                <Text>Discount</Text>

                <Text>{discount}</Text>
              </Flex>

              <Divider />

              <Flex
                justifyContent="space-between"
                fontWeight="bold"
                marginBottom={"20px"}
              >
                <Text>AMOUNT PAYABLE</Text>
                <Text>₹{paybalPrice}</Text>
              </Flex>
              <Divider />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Heading
          fontSize={"13px"}
          fontWeight="500"
          lineHeight={1.5}
          color={"rgb(102, 102, 102)"}
          marginTop="1"
          marginBottom={"2"}
        >
          Safe and Secure Payments. Easy returns. 100% Authentic products.
        </Heading>
      </Flex>
    </div>
  );
};

export default CheckoutBox;
