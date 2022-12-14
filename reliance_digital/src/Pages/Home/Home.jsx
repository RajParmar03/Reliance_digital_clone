import React from "react";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard4 from "./ItemCard4";
import ItemCard5 from "./ItemCard5";
import {
  slideImages1,
  slideImages2,
  slideImages3,
  slideImages4,
  slideImages5,
  slideImages6,
  slideImages7,
  slideImages8,
} from "./CardDetails";
const Home = () => {
  return (
    <div>
      <ItemCard1 type={slideImages1} />
      <ItemCard1 type={slideImages2} />
      <ItemCard5 type={slideImages8} heading="DIGITAL MIDNIGHT SALE | " />
      <br />
      <hr />
      <ItemCard2
        type={slideImages3}
        heading="PRICE DROP ON APPLE SMARTWATCHES | "
        src="https://i.imgur.com/8pxYJUB.png"
      />
      <hr />
      <ItemCard4 type={slideImages4} heading="ENTERTAINMENT FEST" />
      <ItemCard5
        type={slideImages5}
        heading="BIGGEST PRICE DROP ON ROOM HEATERS | "
      />
      <br />
      <hr />
      <ItemCard4 type={slideImages6} heading="GREAT DEALS ON ELECTRONICS" />
      <ItemCard1 type={slideImages7} />
    </div>
  );
};

export default Home;
