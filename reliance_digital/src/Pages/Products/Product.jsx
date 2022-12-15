import React from 'react';
import { Badge, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { BsSuitHeart } from 'react-icons/bs';


const Product = (props) => {

  const { data } = props;
  const { name, img, price, mrp } = data;


  return (
    <>
      <Box>
        <Image src={img} alt={name} p="5" h="200" />
        <Box h="10" w="100%" color="blue.700" lineHeight="120%" marginBottom="3" textOverflow="ellipsis" overflow="hidden">{name}</Box>
        <Flex w="75%" justifyContent='space-between' alignItems="center" marginBottom="2">
          <Heading as="h3" size="xs" color="blue.700">₹{price}</Heading>
          <Text fontSize='sm' fontWeight="bold" color="blackAlpha.600" textDecoration="line-through">₹{mrp}</Text>
        </Flex>
        <Badge borderRadius='full' px='2' border="1px solid green" color="green" fontSize="xs" marginBottom="10">
          OFFERS AVAILABLE
        </Badge>
        <Button w="125%" marginLeft="-6" borderRadius="0" borderTop="1px solid rgb(202, 201, 201)" color="gray" bg="white"><BsSuitHeart /> Wishlist</Button>
      </Box>
    </>
  )
}

export default Product;