import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';

const getData = async (typeOfProduct) => {
    let response = await axios.get(`https://rus-digital-api.vercel.app/${typeOfProduct}`);
    return response.data;
}

const Products = ({typeOfProduct}) => {

    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        getData(typeOfProduct).then((res) => setProductArr(res));
    }, [typeOfProduct]);


    return (
        <Box p="5">
            <Heading p="5">{typeOfProduct}</Heading>
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>
            {
                productArr.map((elem,i) => {
                    return (
                        <GridItem key={elem.name+i} w='100%' bg='white.500' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" padding="25px 25px 0px 25px">
                        <Product data={elem} />
                        </GridItem>
                    )
                })
            }
            </Grid>
        </Box>
    )
}

export default Products;