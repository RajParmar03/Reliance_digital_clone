import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { BiNetworkChart } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GrLogin , GrReturn, GrServices } from "react-icons/gr";

function Navbar() {
  return (
    <Box>

        <Flex 
        w="100%"
        px="30px"
        justifyContent={"space-around"}
        alignItems="center"
        m="auto"
        bg="red"
        pt="10px"
        >
            <Box>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>OUR BRAND PROMISE</Heading>
            </Box>
            <Flex>
            <GrReturn color="white" size="25px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>OUR BRAND PROMISE</Heading>
            </Flex>
            <Flex>
            <FaTruck color="white" size="25px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>NEXT DAY DELIVERY</Heading>
            </Flex>
            <Flex>
            <GrServices color="white" size="25px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>SERVICE GUARANTEE</Heading>
            </Flex>
            <Flex>
            <BiNetworkChart color="white" size="25px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>UNMATCHED NETWORK</Heading>
            </Flex>
            <Flex>
            <ImLocation2 color="white" size="25px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>Find a store</Heading>
            </Flex>
            <Flex>
            <MdConnectWithoutContact color="white" size="25px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>Contact Us</Heading>
            </Flex>
        </Flex>

      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bg="red"
        p="10px"
        px="3%"
        gap="30px"
      >
       <Box>
       <Image src="RUS DIGITAL (1).png" alt="logo" w="190px" h="70px"/>
       </Box>
       <Flex bg="white" borderRadius={"20px"} w="500px" p="5px" m="auto" textAlign={"center"}>
       <Input border={"none"} fontSize={"18px"} borderRadius="full" fontWeight="bold"  placeholder="Find Your Favorite Product" />
       <FcSearch fontSize={"42px"}/>
       </Flex>
        <Flex cursor={"pointer"}>
            <ImLocation2 color="white" fontSize="20px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>Deliver to Mumbai 400059</Heading>
        </Flex>
        <Flex cursor={"pointer"}>
            <BsFillCartFill color="white" fontSize="20px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>Cart</Heading>
        </Flex>
        <Flex cursor={"pointer"}>
            <GrLogin color="white" fontSize="20px"/>
            <Heading cursor={"pointer"} fontSize={"17px"} color="white" _hover={{bg:"red",textDecoration:"underline"}}>Login</Heading>
        </Flex>

      </Flex>

      <Flex
        w="100%"
        textAlign={"center"}
        justifyContent="space-between"
        alignItems={"center"}
        m="auto"
        bg="blue"
        px="3%"
      >
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            TELEVISIONS <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >


              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                 Televisions
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Smart TVs
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                 32 Inch TVs
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>

            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            color="white"
            transition="all 0.2s"
            _hover={{ bg: "red.600", color: "white" }}
            _expanded={{ bg: "green.600" }}
            _focus={{ boxShadow: "outline" }}
          >
            Mobiles & Tablets <ChevronDownIcon />
          </MenuButton>
          <MenuList bg="skyblue">
            <Grid
              p="15px"
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="25px"
              justifyContent="space-around"
              alignContent={"center"}
              textAlign="center"
              w="95%"
            >
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Smartphones
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Headphones & Headsets
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  AI Learning Robots
                </Heading>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Wearable Technology
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Top Selling Smartwatches
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Apple Price Drop
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Tablets & eReaders
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Every Day use Tablets below 15000
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Premium Tablets, Above 15001
                </Text>
              </Box>

              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Power Banks
                </Heading>
              </Box>

              <Box >
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  Accessories
                </Heading>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Mobile Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Tablet Accessories
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Car Mobile Holders
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Memory Cards
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Cables & Cords
                </Text>
                <Text
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Chargers & Adapters
                </Text>
              </Box>
              <Box>
                <Heading
                  _hover={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  my="8px"
                  fontSize={"15px"}
                >
                  eSlates
                </Heading>
              </Box>
            </Grid>
          </MenuList>
        </Menu>
       
      </Flex>
    </Box>
  );
}

export default Navbar;
