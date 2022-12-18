import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const postSingleDataWish = async (data) => {
  try {
    let response = await axios.post(
      `https://rus-digital-televisions.onrender.com/whishlist`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "in the postSingleData function and error is :- ",
      error.response.data
    );
  }
};




const Product = (props) => {
  const { data, typeOfProduct } = props;
  const { id, name, img, price, mrp } = data;
  console.log("this is data from the outside hanldewish",data);

  var navigate = useNavigate();
  const toast = useToast();

  



  
  const handleWish = (data) => {
    console.log("this is data from hadleWhish",data);
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }
    // console.log("newData is :-", newData);
    // console.log("in the handlePost function and viewing the data before the post request", data);
    postSingleDataWish(newData).then((res) =>{
      // console.log("in the handlePost function and viewing the data after the post request", res)
      toast({
        title: "Added Item Successfully to WishList",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      })
      setTimeout(() => {
        navigate("/whishlist");
      }, 1000);
    }
    );
  };

  return (
    <>
      <Link to={`/${typeOfProduct}/${id}`}>
        <Box>
          <Image src={img} alt={name} p="5" h="200" _hover={{ p: "0" }} />
          <Box
            h="10"
            w="100%"
            color="blue.700"
            lineHeight="120%"
            marginBottom="3"
            textOverflow="ellipsis"
            overflow="hidden"
            _hover={{ color: "red" }}
          >
            {name}
          </Box>
          <Flex
            w="75%"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="2"
          >
            <Heading as="h3" size="xs" color="blue.700">
              ₹{price}
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="blackAlpha.600"
              textDecoration="line-through"
            >
              ₹{mrp}
            </Text>
          </Flex>
          <Badge
            borderRadius="full"
            px="2"
            border="1px solid green"
            color="green"
            fontSize="xs"
            marginBottom="10"
          >
            OFFERS AVAILABLE
          </Badge>
        </Box >
      </Link>
      <Button
        w="125%"
        marginLeft="-6"
        borderRadius="0"
        borderTop="1px solid rgb(202, 201, 201)"
        color="gray"
        bg="white"
        onClick={() => handleWish(data)}
      >
        <BsSuitHeart /> Wishlist
      </Button>
    </>
  );
};

export default Product;
