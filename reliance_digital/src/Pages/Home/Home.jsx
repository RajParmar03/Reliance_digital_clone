import React from "react";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard4 from "./ItemCard4";
import ItemCard5 from "./ItemCard5";
import {
  ItemDetails1,
  ItemDetails2,
  ItemDetails3,
  ItemDetails4,
  ItemDetails5,
  ItemDetails6,
  ItemDetails7,
  ItemDetails8,
} from "./CardDetails";
const Home = () => {
  return (
    <div>
      <ItemCard1 type={ItemDetails1} />
      <ItemCard1 type={ItemDetails2} />
      <ItemCard5 type={ItemDetails8} heading="DIGITAL MIDNIGHT SALE | " />
      <br />
      <hr />
      <ItemCard2
        type={ItemDetails3}
        heading="PRICE DROP ON APPLE SMARTWATCHES | "
        src="https://i.imgur.com/8pxYJUB.png"
      />
      <hr />
      <ItemCard4 type={ItemDetails4} heading="ENTERTAINMENT FEST" />
      <ItemCard5
        type={ItemDetails5}
        heading="BIGGEST PRICE DROP ON ROOM HEATERS | "
      />
      <br />
      <hr />
      <ItemCard4 type={ItemDetails6} heading="GREAT DEALS ON ELECTRONICS" />
      <ItemCard1 type={ItemDetails7} />
    </div>
  );
};

export default Home;
