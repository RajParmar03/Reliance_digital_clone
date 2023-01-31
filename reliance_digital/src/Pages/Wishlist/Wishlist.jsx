import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Auth/auth.action";
import { getProducts } from "../../Redux/Products/products.action";
import WishProduct from "./WishProduct";
const getData = async (typeOfProduct) => {
  let response = await axios.get(
    `https://rus-digital-televisions.onrender.com/${typeOfProduct}`
  );
  return response.data;
};
function Wishlist({ typeOfProduct }) {
  const { name,email } = useSelector((store) => store.AuthManager);
  const productsList = useSelector((store) => store.product.data);
  const loading = useSelector((store) => store.product.loading);
  const error = useSelector((store) => store.product.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleDelete=(id,name)=>{
    axios.delete(`https://rus-digital-televisions.onrender.com/whishlist/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    toast({
      title: "Product Deleted.",
      description: `${name} Delete from wishlist`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/whishlist")
  }
  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(getProducts(typeOfProduct));
  }, [typeOfProduct,dispatch]);

  if (error) {
    return (
      <Heading
        size="3xl"
        textAlign="center"
        color="red.500"
        marginTop={10}
        marginBottom="200px"
      >
        Some thing went wrong...
      </Heading>
    );
  }
  const handleLogout = () => {
    dispatch(logout());
    toast({
      title: "Logout  Success.",
      description: `We will miss you 😭`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    navigate("/login");
  };
  return (
    <Box w="100%" m="auto">
      <HStack w="95%" m="auto" p="3px">
        <VStack
          p="20px"
          alignItems={"center"}
          cursor="pointer"
          border="1px solid black"
        >
          <Heading size={"lg"}>{name}</Heading>
          <Text size={"lg"}>{email}</Text>
          <Heading size={"md"}>My Account</Heading>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Profile</Text>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Order</Text>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Address</Text>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Credit</Text>
          <Heading size={"md"} onClick={handleLogout}>
            Logout
          </Heading>
        </VStack>
        <Box>
          <Box p="5">
            <Heading p="5" marginBottom={5}>
              Wishlist
            </Heading>
            {loading ? (
              <Heading
                size="3xl"
                textAlign="center"
                color="blue.400"
                marginTop={10}
                marginBottom="200px"
              >
                Loading...
              </Heading>
            ) : (
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2,1fr)",
                  "repeat(3,1fr)",
                  "repeat(4,1fr)",
                  "repeat(5,1fr)",
                ]}
                gap={3}
              >
                {productsList.map((elem, i) => {
                  // console.log("in the products page in the map method and elem is :- ", elem);
                  return (
                    <GridItem
                      key={elem.name + i}
                      w="100%"
                      bg="white.500"
                      boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
                      padding="25px 25px 0px 25px"
                      _hover={{
                        boxShadow:
                          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                        cursor: "pointer",
                      }}
                    >
                      <WishProduct data={elem} handleDelete={handleDelete} typeOfProduct={typeOfProduct} />
                    </GridItem>
                  );
                })}
              </Grid>
            )}
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default Wishlist;
