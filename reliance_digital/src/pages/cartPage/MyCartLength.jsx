import React, { useEffect } from "react";
import { Box, Heading, Flex, useToast } from "@chakra-ui/react";
import { GetData } from "./MainCartPage";
import { useState } from "react";

const MyCartLength = ({item}) => {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(res);

        setLoading(false);
       
      })
      .catch((err) => {
        toast({
          title: "Something Went Wrong",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "top",
        });
      });
  }, []);
  return (
    <div>
      <Flex
        border={"1px solid rgb(224, 224, 225)"}
        backgroundColor="rgb(255, 255, 255)"
        boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
        borderRadius="4px"
        padding={"16px"}
        marginBottom="8px"
        width={"90%"}
        justifyContent="space-between"
        marginTop={"20px"}
      >
        <Box>
          <Heading fontWeight={600} fontSize="16px">
            My Cart ({item} Items)
          </Heading>
        </Box>
        <Box>
          <Heading fontWeight={600} fontSize="16px">
            Shipping to: 400001
          </Heading>
        </Box>
      </Flex>
    </div>
  );
};

export default MyCartLength;