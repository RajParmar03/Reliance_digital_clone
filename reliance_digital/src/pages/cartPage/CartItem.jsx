import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Button, Heading, useToast } from "@chakra-ui/react";
import { FcPlus } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { INC, DEC } from "../../Redux/Cart/cart.types";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Redux/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { postSingleDataWish } from "../SingleProduct/SingleProduct";

const CartItem = ({ name, img, price, id, DeleteRequest }) => {
  const singleData = {
    name,
    img,
    price,
  };
  const toast = useToast();

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  var navigate = useNavigate();

  const handleInc = () => {
    setCount(count + 1);
    let number = parseFloat(price.replace(/,/g, ""));
    console.log(number);
    dispatch({ type: "priceIncrease", payload: number });
  };
  const handleDec = () => {
    if (count > 1) {
      let number = parseFloat(price.replace(/,/g, ""));
      console.log(number);
      setCount(count - 1);
      dispatch({ type: "priceDecrease", payload: number });
    }
  };

  const handleWish = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }

    postSingleDataWish(newData)
      .then((res) => {
        navigate("/whishlist");
        toast({
          title: "Successfully added to wishlist",
          description: "Product Added",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent",
          position: "top",
        });
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
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var tomorrow = new Date();
  tomorrow.setTime(tomorrow.getTime() + 1000 * 3600 * 24);
  var dayName = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var monName = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var now = new Date();
  var dtString =
    dayName[now.getDay()] +
    ", " +
    monName[now.getMonth()] +
    " " +
    now.getDate();
  var change =
    months[tomorrow.getMonth()] +
    " " +
    tomorrow.getDate() +
    ", " +
    tomorrow.getFullYear();
  return (
    <Flex
      key={id}
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
            <Image src={img} alt={name} width="200px" />
          </Box>
          <Box display={"flex"} gap="2">
            <Button onClick={handleDec}>-</Button>
            <Button
              backgroundColor={"white"}
              disabled={true}
              fontWeight={"bold"}
            >
              {count}
            </Button>
            <Button onClick={handleInc}>+</Button>
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
            {name}
          </Heading>
          <Heading
            fontSize="14px"
            color={"rgb(102, 102, 102)"}
            fontWeight="600"
            lineHeight={"1.1"}
          >
            {Date.now()}
          </Heading>
          <Flex>
            <FcPlus />
            <Heading fontSize="12px" color={"red"}>
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
            {price}
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
            <TbTruckDelivery size={20} />
            <Heading
              fontSize="13px"
              color={"rgb(0, 51, 128)"}
              lineHeight={"20px"}
            >
              Standard Delivery: {dtString} - {change}
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
        textAlign={"center"}
      >
        <Box width={"49%"} borderRight="1px solid rgb(224, 224, 225)">
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={() => {
              DeleteRequest(id)
                .then((response) => {
                  toast({
                    title: "Delete Item Successfully",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                    position: "top",
                  });
                })
                .catch((reject) => {
                  toast({
                    title: "Something Went Wrong",
                    description: `${reject.message}`,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom-right",
                  });
                });
            }}
          >
            Remove
          </Button>
        </Box>
        <Box width={"49%"}>
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={() => handleWish(singleData)}
          >
            Move to Wishlist
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;