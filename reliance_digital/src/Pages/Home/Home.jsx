import React from "react";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard4 from "./ItemCard4";
import ItemCard5 from "./ItemCard5";
import ItemCard6 from "./ItemCard6";
import ItemCard7 from "./ItemCard7";
import ItemCard8 from "./ItemCard8";
import {
  ItemDetails1,
  ItemDetails2,
  ItemDetails3,
  ItemDetails4,
  ItemDetails5,
  ItemDetails6,
  ItemDetails7,
  ItemDetails8,
  ItemDetails9,
  ItemDetails10,
  ItemDetails11,
  ItemDetails12,
  ItemDetails13,
  ItemDetails14,
  ItemDetails15,
  ItemDetails16,
  ItemDetails17,
  ItemDetails18,
} from "./CardDetails";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <ItemCard1 type={ItemDetails1} />
      <ItemCard1 type={ItemDetails2} />
      <ItemCard5 type={ItemDetails8} heading="TRENDING LAPTOPS | " />
      <br />
      <hr />
      <ItemCard2
        type={ItemDetails3}
        linked={"/personalcare"}
        heading="PRICE DROP ON APPLE SMARTWATCHES | "
        src="https://i.imgur.com/8pxYJUB.png"
      />
      <hr />
      <ItemCard4 type={ItemDetails4} heading="ENTERTAINMENT FEST" />
      <ItemCard5
        type={ItemDetails5}
        heading="BIGGEST PRICE DROP ON  MICROWAVE OVEN | "
      />
      <br />
      <hr />
      <ItemCard4 type={ItemDetails6} heading="GREAT DEALS ON ELECTRONICS" />
      <ItemCard1 type={ItemDetails7} />
      <ItemCard6
        type={ItemDetails9}
        heading="THE RELIANCE DIGITAL BRAND PROMISE"
      />
      <br />
      <hr />
      <ItemCard2
        type={ItemDetails10}
        heading="UP TO 80% OFF ON PERSONAL CARE APPLIANCES | "
        src="https://i.imgur.com/FPm2ngR.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails11}
        heading="TRENDING IN TELEVISIONS | "
        src="https://i.imgur.com/fL1O6va.png"
      />
      <hr />
      <ItemCard2
        type={ItemDetails12}
        heading="SMARTWATCHES STARTING FROM RS.999 | "
        src="https://i.imgur.com/OGeXueA.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails13}
        heading="UP TO 70% OFF ON EVERYDAY APPLIANCES | "
        src="https://i.imgur.com/ntyAjRL.png"
      />
      <hr />
      <ItemCard2
        type={ItemDetails14}
        heading="IT ACCESSORIES STARTING FROM RS. 109 | "
        src="https://i.imgur.com/tpj1BEM.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails15}
        heading="APPLE IPHONE 14 & 14 PLUS | "
        src="https://i.imgur.com/tkLHMZ8.png"
      />
      <hr />
      <ItemCard2
        type={ItemDetails16}
        heading="BEST SELLING AUDIO ACCESSORIES | "
        src="https://i.imgur.com/7J25A1o.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails17}
        heading="UP TO 75% ON CAMERA ACCESSORIES | "
        src="https://i.imgur.com/EGk9huk.png"
      />
      <ItemCard8 type={ItemDetails18} heading="EXPLORE OUR RANGE OF PRODUCTS" />
    </Box>
  );
};

export default Home;
