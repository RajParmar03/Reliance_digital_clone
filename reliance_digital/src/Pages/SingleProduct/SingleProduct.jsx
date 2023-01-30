import {Center, Box, Button, Flex, Grid, GridItem, Heading, Image, Input, ListItem, Text, UnorderedList, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../Redux/SingleProduct/SingleProduct.action';
import { RotatingLines } from "react-loader-spinner";





const getSingleData = async (type, id) => {
  let response = await axios.get(
    `https://rus-digital-api.vercel.app/${type}/${id}`
  );
  // console.log("in the singleproduct page in the getsingleData function and response.data is :-",response.data);
  return response.data;
};

const postSingleData = async (data) => {
  try {
    let response = await axios.post(
      `https://rus-digital-televisions.onrender.com/cart`,
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
 export const postSingleDataWish = async (data) => {
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

const SingleProduct = (props) => {
  const { typeOfProduct } = props;

  const params = useParams();
  const toast = useToast();


  // const [singleData, setSingleData] = useState({});

  var navigate = useNavigate();

  const singleData = useSelector((store) => store.singleProduct.data);
  // console.log("in the singleProductPage and the singleData is :-",singleData);
  const loading = useSelector((store) => store.singleProduct.loading);
  const error = useSelector((store) => store.singleProduct.error);

  const dispatch = useDispatch();

  const handlePost = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }
    // console.log("newData is :-", newData);
    // console.log("in the handlePost function and viewing the data before the post request", data);
    postSingleData(newData).then((res) =>{
      // console.log("in the handlePost function and viewing the data after the post request", res)
      toast({
        title: "Added Item Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      })
      setTimeout(() => {
        navigate("/cart")
      }, 1000);
    }
    );
  };

  const handleWish = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }
    // console.log("newData is :-", newData);
    // console.log("in the handlePost function and viewing the data before the post request", data);
    postSingleDataWish(newData).then((res) =>
      // console.log("in the handlePost function and viewing the data after the post request", res)
      navigate("/whishlist")
    );
  };

  // const handleDelete = async(id) => {
  //     let response = await axios.delete(`https://rus-digital-televisions.onrender.com/cart/${id}`).then((res) => console.log(res));
  // }

  useEffect(() => {
    dispatch(getSingleProduct(typeOfProduct, params.id));
  }, [typeOfProduct, params.id]);

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

  return (
    <>
      {loading ? (
        <Center>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Center>
      ): (
        <Box marginTop={12}>
          <Grid
            h={["1300px", "1100px", "600px"]}
            templateRows={[
              "repeat(8, 1fr)",
              "repeat(8, 1fr)",
              "repeat(8, 1fr)",
            ]}
            templateColumns={[
              "repeat(4, 1fr)",
              "repeat(6, 1fr)",
              "repeat(10, 1fr)",
            ]}
          >
            <GridItem
              rowSpan={[1, 2, 4]}
              colSpan={[4, 6, 4]}
              display="flex"
              justifyContent="center"
              alignitem="center"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <Image
                src={singleData.img}
                alt={singleData.name}
                _hover={{ cursor: "crosshair" }}
              />
            </GridItem>

            <GridItem
              colSpan={[4, 6, 6]}
              rowSpan={1}
              p={5}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <Text color="gray.500" marginBottom={5}>
                Article ID: {singleData.id}
              </Text>
              <Heading size="md" marginBottom={5}>
                {singleData.name}
              </Heading>
            </GridItem>

            <GridItem
              colSpan={[4, 3, 3]}
              rowSpan={7}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              p={5}
            >
              <Heading size="sm" marginBottom={3}>
                Gain more with offers (4)
              </Heading>
              <UnorderedList color="gray.600" fontSize="sm" marginBottom={4}>
                <ListItem>
                  Wall mount bracket is on chargeable basis.{" "}
                  <span style={{ color: "#2871c4" }}>Read T&C</span>
                </ListItem>
                <ListItem>
                  Buy RCP warranty and save up to 55%.{" "}
                  <span style={{ color: "#2871c4" }}>Read T&C</span>
                </ListItem>
                <ListItem>
                  Shop for Rs.20,000 & above and get instant discount Up To
                  Rs.5000,Use coupon codes "YES1000" for above 20,000 ,"YES2500"
                  for above 50,000, "YES5000" for above 1,00,000..{" "}
                  <span style={{ color: "#2871c4" }}>Read T&C</span>
                </ListItem>
                <ListItem>
                  Get Cashback upto Rs. 1,000 on Mobikwik Wallet.{" "}
                  <span style={{ color: "#2871c4" }}>Read T&C</span>
                </ListItem>
              </UnorderedList>
              <Heading size="sm" marginBottom={3}>
                Save more with EMI/Cashback (1){" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    color: "#2871c4",
                  }}
                >
                  Read T&C
                </span>
              </Heading>
              <UnorderedList color="gray.600" fontSize="sm" marginBottom={4}>
                <ListItem>
                  EMIs (Credit Cards) from ₹792.16/month |{" "}
                  <span style={{ color: "#2871c4" }}>
                    View all Standard Credit Cards EMI options
                  </span>
                </ListItem>
              </UnorderedList>
              <Heading size="sm" marginBottom={3}>
                Warranty
              </Heading>
              <UnorderedList color="gray.600" fontSize="sm" marginBottom={5}>
                <ListItem>
                  <span style={{ fontWeight: "bold" }}>Warranty:</span> 1 Year
                  manufacturer warranty
                </ListItem>
              </UnorderedList>
              <Heading size="sm" marginBottom={3}>
                Additional Services & Warranties (3){" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#2871c4",
                  }}
                >
                  View All
                </span>
              </Heading>
            </GridItem>
            <GridItem
              colSpan={[4, 3, 3]}
              rowSpan={7}
              p={5}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
            >
              <Heading size="lg" marginBottom={5} color="blue.700">
                ₹{singleData.price}
              </Heading>
              <Text fontSize="lg" marginBottom={3}>
                MRP:{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {singleData.mrp}
                </span>{" "}
                <span style={{ fontSize: "12px" }}>
                  (Inclusive of all taxes)
                </span>
              </Text>

              <Text
                fontSize="sm"
                color="green.600"
                style={{ fontWeight: "bold" }}
                marginBottom={3}
              >
                You Save: {singleData.discount}
              </Text>

              <Text
                fontSize="sm"
                style={{ fontWeight: "bold" }}
                marginBottom={3}
              >
                EMIs (Credit Cards) from ₹792.16/month |{" "}
                <span style={{ color: "#2871c4" }}>View Plans</span>
              </Text>

              <Text
                fontSize="lg"
                style={{ fontWeight: "bold" }}
                marginBottom={3}
              >
                FREE Shipping!
              </Text>

              <Input
                w="70%"
                borderRadius="none"
                placeholder="Enter / Detect PIN Code"
                p={2}
                marginBottom={3}
              ></Input>

              <Flex w="full" justifyContent="space-between">
                <Button
                  w="49%"
                  color="white"
                  bg="red"
                  borderRadius="sm"
                  fontSize="lg"
                  p={6}
                  _hover={{ bg: "blue.800" }}
                  onClick={() => handlePost(singleData)}
                >
                  ADD TO CART
                </Button>
                <Button
                  w="49%"
                  color="white"
                  bg="orangered"
                  borderRadius="sm"
                  fontSize="lg"
                  p={6}
                  _hover={{ backgroundColor: "orangered" }}
                  onClick={() => handleWish(singleData)}
                >
                  Add to Wishlist
                </Button>
              </Flex>
            </GridItem>
            {/* <button onClick={() => handleDelete(singleData.id)}>delete</button> */}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default SingleProduct;