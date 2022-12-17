import React, { useEffect } from "react";
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
import axios from "axios";

const WishProduct = (props) => {
  const toast = useToast();
  const { data,handleDelete } = props;
  const {id, name, img, price, mrp } = data;

  const handleAdd = () => {
    let flag = false;
    axios
      .get("https://rus-digital-televisions.onrender.com/cart")
      .then((res) => {
        res.data.map((i) => {
          if (i.name === data.name) {
            flag = true;
          }
        });

        if (flag) {
          toast({
            title: "Product Already Present.",
            description: `${name} already present in Cart`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          let newData = {};
          for (let i in data) {
            if (i === "id") {
              continue;
            }
            newData[i] = data[i];
          }
          axios
            .post("https://rus-digital-televisions.onrender.com/cart", newData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
          toast({
            title: "Product Added in Cart.",
            description: `${name} successfuly added in Cart`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
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
      <Flex>
        <Button
          w="125%"
          marginLeft="-6"
          borderRadius="0"
          borderTop="1px solid rgb(202, 201, 201)"
          color="gray"
          bg="white"
          _hover={{ color: "red", fontWeight: "bold" }}
          onClick={()=>handleDelete(id,name)}
        >
          Delete
        </Button>
        <Button
          w="125%"
          marginLeft="-6"
          borderRadius="0"
          borderTop="1px solid rgb(202, 201, 201)"
          color="gray"
          bg="white"
          _hover={{ color: "red", fontWeight: "bold" }}
          onClick={handleAdd}
        >
          Add TO CART
        </Button>
      </Flex>
    </Box>
  );
};

export default WishProduct;
