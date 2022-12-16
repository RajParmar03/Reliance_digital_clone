import React from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

 export const GetData = async () => {
  try {
    let response = await axios.get(
      `https://rus-digital-televisions.onrender.com/cart`
    );

    return await response.data[0];
  } catch (err) {
    return err;
  }
};

const MainCartPage = () => {
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
          {data &&
            data.map(({ name, img, price, id }) => {
              return (
                <CartItem
                  key={id}
                  name={name}
                  img={img}
                  price={price}
                  id={id}
                />
              );
            })}
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
