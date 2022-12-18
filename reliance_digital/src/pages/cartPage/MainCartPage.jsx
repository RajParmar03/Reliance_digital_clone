import React from "react";
import { Box, Center, Flex, useToast } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { store } from "../../Redux/store";
import { useSelector } from "react-redux";

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
<<<<<<< HEAD
  // const [count, setCount] = useState(1);
=======
  const [count, setCount] = useState(1);
>>>>>>> f243dacd25c578a500e44fa45db3a4bbe01f2b48
  let totalPrice = 0;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [extremelyfinalPrice, setExtremelyfinalPrice] = useState(0);

  // const amount = useSelector((store) => store.cart.count);
=======
  const amount = useSelector((store) => store.cart.count);
>>>>>>> f243dacd25c578a500e44fa45db3a4bbe01f2b48

  const DeleteRequest = async (id) => {
    try {
      let response = await axios.delete(
        `https://rus-digital-televisions.onrender.com/cart/${id}`
      );
      GetData().then((res) => {
        return setData(res);
      });
    } catch (err) {
      return err;
    }
  };

<<<<<<< HEAD
  
  let finallyTotalArray = data.map((elem) => {
    let newArray = elem.price.split(".");
    newArray.pop();
    let finalArray = newArray[0].split(",");
    
    
    let finalPrice = ""; 
    for(let i=0;i<finalArray.length;i++){
      finalPrice += finalArray[i];
    }
    
   finalPrice = Number(finalPrice);
   return finalPrice;

  });
  console.log("this is finaly total Array",finallyTotalArray);

  let finallyTotal = finallyTotalArray.reduce((acc,elem) => {
    return elem + acc;
  },0);
  console.log("this is the finally total",finallyTotal);
  
  useEffect(() => {
      setExtremelyfinalPrice(finallyTotal);
  },[finallyTotal]);
  console.log("this is extrew",extremelyfinalPrice);


  const handleApply = (totalPrice,val) => {
    totalPrice >= 1000 && val === "MASAI40"
      ? setExtremelyfinalPrice(totalPrice - 500)
      : setExtremelyfinalPrice(totalPrice);
  };

=======
  let newTotalPrice = data && data.reduce((acc,elem) => {
    return Number(elem.price) + acc;
  },0);
  console.log("this is the newTotal",newTotalPrice);

  let newA = data.map((elem) => {
    console.log("this is from map and price is",Number(elem.price));
  })
>>>>>>> f243dacd25c578a500e44fa45db3a4bbe01f2b48



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
<<<<<<< HEAD
  console.log("this is data",data);
=======
>>>>>>> f243dacd25c578a500e44fa45db3a4bbe01f2b48
 
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
          <MyCartLength item={data.length} />
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
                <>
                  <CartItem
                    key={id}
                    name={name}
                    img={img}
                    price={price}
                    id={id}
                    DeleteRequest={DeleteRequest}
                  />
                  <Box display={"none"}>
                    {(totalPrice = totalPrice + price)}
                    
                  
                  </Box>
                </>
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
<<<<<<< HEAD
          <CheckoutBox items={data.length} totalPrice={extremelyfinalPrice} handleApply={handleApply} />
=======
          <CheckoutBox items={data.length} totalPrice={totalPrice} />
>>>>>>> f243dacd25c578a500e44fa45db3a4bbe01f2b48
        </Flex>
      </Flex>
    </div>
  );
};

export default MainCartPage;