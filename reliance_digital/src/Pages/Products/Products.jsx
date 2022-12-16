import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

const getData = async (typeOfProduct) => {
  let response = await axios.get(
    `https://rus-digital-api.vercel.app/${typeOfProduct}`
  );
  return response.data;
};

const category = {
  mobilesandtablets: "MOBILES AND TABLETS",
  televisions: "TELEVISIONS",
  headphones: "HEADPHONES",
  homeappliances: "HOME-APPLIANCES",
  computers: "COMPUTERS",
  cameras: "CAMERAS",
  kitchen: "KITCHEN-APPLIANCES",
  personalcare: "PERSONAL-CARE",
  accessories: "ACCESSORIES",
};

const Products = (props) => {
  const { typeOfProduct } = props;

  const [productArr, setProductArr] = useState([]);

  useEffect(() => {
    getData(typeOfProduct).then((res) => setProductArr(res));
  }, [typeOfProduct]);

  return (
    <Box p="5">
      <Heading p="5" marginBottom={5}>
        {category[typeOfProduct]}
      </Heading>
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
        {productArr.map((elem, i) => {
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
              <Product data={elem} typeOfProduct={typeOfProduct} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Products;
