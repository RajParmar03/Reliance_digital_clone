import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/Auth/auth.action";

function Login() {
  const [loginCreds, setLoginCreds] = useState({});
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const toast = useToast()
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
    if(isAuth){
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <>
      <Box w="100%">
        <HStack
          w="98%"
          justifyContent={"space-around"}
          alignContent="center"
          m="auto"
          p="auto"
        >
          <VStack>
            <Image src="login.jpg" alt="login" width="48%" />
          </VStack>
          <Flex
            w="50%"
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy your shopping
                  <Link color={"blue.400"}> experience</Link> ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      onChange={hanldeChange}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Enter Password..."
                      onChange={hanldeChange}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Button
                      onClick={handleSubmit}
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </HStack>
      </Box>
    </>
  );
}


export default Login;