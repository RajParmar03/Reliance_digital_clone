import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { FooterCard1, FooterCard2, FooterCard4 } from "./FooterCard";
import {
  ProductCategories,
  SiteInfo,
  ResourcesCenter,
  Policies,
} from "./FooterDetail";
const Footer = () => {
  return (
    <Box backgroundColor="#003380" color="white" justifyContent="center">
      <Grid
         templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        justifyContent="space-evenly"
        m="auto"
        w="90%"
        p="2"
        lineHeight="32px"
      >
        <FooterCard1 type={ProductCategories} heading="PRODUCT CATEGORIES" />
        <FooterCard1 type={SiteInfo} heading="SITE INFO" />
        <FooterCard1 type={ResourcesCenter} heading="RESOURCES CENTER" />
        <FooterCard1 type={Policies} heading="POLICIES" />
        <br />
      </Grid>
      <FooterCard2 />
      <FooterCard4 />
    </Box>
  );
};

export default Footer;
