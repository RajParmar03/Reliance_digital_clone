import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Auth/auth.action";
import Products from "../Products/Products";
function Wishlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        alert("We will miss you 😭");
        navigate("/login");
      };
  return (
    <Box w="100%" m="auto">
      <HStack w="95%" m="auto" p="3px">
        <VStack p="20px" alignItems={"center"} cursor="pointer" border="1px solid black">
          <Heading size={"lg"}>Sumit Chimkar</Heading>
          <Text size={"lg"}>sumitchimkar0@gmail.com</Text>
          <Heading size={"md"}>My Account</Heading>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Profile</Text>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Order</Text>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Address</Text>
          <Text _hover={{ color: "blue", fontWeight: "bold" }}>My Credit</Text>
          <Heading size={"md"} onClick={handleLogout}>Logout</Heading>
        </VStack>
        <Box>
            <Products typeOfProduct="whishlist"/>
        </Box>
      </HStack>
    </Box>
  );
}

export default Wishlist;
