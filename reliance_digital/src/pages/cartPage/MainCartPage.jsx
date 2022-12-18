import React from "react";
import {  Center, Flex, useToast } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import  {RotatingLines}  from "react-loader-spinner";
export const GetData = async () => {
  try {
    let response = await axios.get(
      `https://rus-digital-televisions.onrender.com/cart`
    );

    return await response.data;
  } catch (err) {
    return err;
  }
};

const MainCartPage = () => {
  const toast = useToast();
  const [count, setCount] = useState(1);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetData()
      .then((res) => {
        setData(res);
        setLoading(false);
        console.log(res);
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
  console.log(data);
  return (
    <div>
      {/* <Box border={"0px solid black"} height="140px"></Box> */}
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
          {loading && (
            <Center>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </Center>
          )}
          {data &&
            data.map(({ name, img, price, id }) => {
              return (
                <CartItem
                  key={id}
                  name={name}
                  img={img}
                  price={price}
                  id={id}
                  setCount={setCount}
                  count={count}
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
          <CheckoutBox items={data.length} />
        </Flex>
      </Flex>
    </div>
  );
};

export default MainCartPage;
