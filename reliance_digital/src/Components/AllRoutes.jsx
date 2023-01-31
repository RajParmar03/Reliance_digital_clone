import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCartPage from "../Pages/cartPage/MainCartPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Wishlist from "../Pages/Wishlist/Wishlist";
import SearchPage from "../Pages/SearchPage/SearchPage";
import Payments from "../Pages/payment/Payments";
import Checkout from "../Pages/checkout/checkout";
import { LastPage } from "../Pages/cartPage/LastPage";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/mobilesandtablets"
          element={<PrivateRoute><Products typeOfProduct="mobilesandtablets" /></PrivateRoute>}
        ></Route>
        <Route
          path="/mobilesandtablets/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="mobilesandtablets" /></PrivateRoute>}
        ></Route>
        <Route
          path="/televisions"
          element={<PrivateRoute><Products typeOfProduct="televisions" /></PrivateRoute>}
        ></Route>
        <Route
          path="/televisions/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="televisions" /></PrivateRoute>}
        ></Route>
        <Route
          path="/kitchen"
          element={<PrivateRoute><Products typeOfProduct="kitchen" /></PrivateRoute>}
        ></Route>
        <Route
          path="/kitchen/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="kitchen" /></PrivateRoute>}
        ></Route>
        <Route
          path="/headphones"
          element={<PrivateRoute><Products typeOfProduct="headphones" /></PrivateRoute>}
        ></Route>
        <Route
          path="/headphones/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="headphones" /></PrivateRoute>}
        ></Route>
        <Route
          path="/homeappliances"
          element={<PrivateRoute><Products typeOfProduct="homeappliances" /></PrivateRoute>}
        ></Route>
        <Route
          path="/homeappliances/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="homeappliances" /></PrivateRoute>}
        ></Route>
        <Route
          path="/computers"
          element={<PrivateRoute><Products typeOfProduct="computers" /></PrivateRoute>}
        ></Route>
        <Route
          path="/computers/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="computers" /></PrivateRoute>}
        ></Route>
        <Route
          path="/cameras"
          element={<PrivateRoute><Products typeOfProduct="cameras" /></PrivateRoute>}
        ></Route>
        <Route
          path="/cameras/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="cameras" /></PrivateRoute>}
        ></Route>
        <Route
          path="/personalcare"
          element={<PrivateRoute><Products typeOfProduct="personalcare" /></PrivateRoute>}
        ></Route>
        <Route
          path="/personalcare/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="personalcare" /></PrivateRoute>}
        ></Route>
        <Route
          path="/accessories"
          element={<PrivateRoute><Products typeOfProduct="accessories" /></PrivateRoute>}
        ></Route>
        <Route
          path="/accessories/:id"
          element={<PrivateRoute><SingleProduct typeOfProduct="accessories" /></PrivateRoute>}
        ></Route>
        <Route path="/cart" element={<PrivateRoute><MainCartPage /></PrivateRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/whishlist"
          element={<PrivateRoute><Wishlist typeOfProduct={"whishlist"} /></PrivateRoute>}
        ></Route>
        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}></Route>
        <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>}></Route>
        <Route path="/lastpage" element={<PrivateRoute><LastPage /></PrivateRoute>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* <Route path="/order" element={<Products typeOfProduct={"order"}/>}></Route>
            <Route path="/contactus" element={<Products typeOfProduct={"contactus"}/>}></Route>
            <Route path="/profile" element={<Products typeOfProduct={"profile"}/>}></Route> */}
      </Routes>
    </div>
  );
};
export default AllRoutes;