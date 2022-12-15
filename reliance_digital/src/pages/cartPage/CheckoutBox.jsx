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
} from "@chakra-ui/react";
import React from "react";

const CheckoutBox = () => {
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
          <Flex>
            <Box marginTop={"20px"} width={"100%"}>
              <InputGroup size="md">
                <Input pr="4.5rem" placeholder="Coupon Code" />
                <InputRightElement width="4rem">
                  <Button
                    h="2.30rem"
                    size="sm"
                    borderRadius={"none"}
                    color="rgb(54,129,240)"
                    backgroundColor="white"
                    borderLeft={"4px solid rgb(54,129,240)"}
                    borderRight={"1px solid rgb(224, 224, 225)"}
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
                <Text>Price (3 Items)</Text>
                <Text>₹141,398</Text>
              </Flex>

              <Flex justifyContent="space-between">
                <Text>Delivery Charges</Text>
                <Text color="green">FREE</Text>
              </Flex>

              <Divider />

              <Flex justifyContent="space-between">
                <Text>Discount</Text>
                <Text>3000</Text>
              </Flex>

              <Divider />

              <Flex
                justifyContent="space-between"
                fontWeight="bold"
                marginBottom={"20px"}
              >
                <Text>AMOUNT PAYABLE</Text>
                <Text>₹141,398</Text>
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
//
