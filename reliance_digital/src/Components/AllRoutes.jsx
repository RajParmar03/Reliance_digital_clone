import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainCartPage from '../Pages/cartPage/MainCartPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import SingleProduct from '../Pages/SingleProduct/SingleProduct';


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/mobilesandtablets" element={<Products typeOfProduct="mobilesandtablets" />}></Route>
            <Route path="/mobilesandtablets/:id" element={<SingleProduct typeOfProduct="mobilesandtablets" />}></Route>
            <Route path="/televisions" element={<Products typeOfProduct="televisions" />}></Route>
            <Route path="/televisions/:id" element={<SingleProduct typeOfProduct="televisions" />}></Route>
            <Route path="/kitchen" element={<Products typeOfProduct="kitchen" />}></Route>
            <Route path="/kitchen/:id" element={<SingleProduct typeOfProduct="kitchen" />}></Route>
            <Route path="/headphones" element={<Products typeOfProduct="headphones" />}></Route>
            <Route path="/headphones/:id" element={<SingleProduct typeOfProduct="headphones" />}></Route>
            <Route path="/homeappliances" element={<Products typeOfProduct="homeappliances" />}></Route>
            <Route path="/homeappliances/:id" element={<SingleProduct typeOfProduct="homeappliances" />}></Route>
            <Route path="/computers" element={<Products typeOfProduct="computers" />}></Route>
            <Route path="/computers/:id" element={<SingleProduct typeOfProduct="computers" />}></Route>
            <Route path="/cameras" element={<Products typeOfProduct="cameras" />}></Route>
            <Route path="/cameras/:id" element={<SingleProduct typeOfProduct="cameras" />}></Route>
            <Route path="/personalcare" element={<Products typeOfProduct="personalcare" />}></Route>
            <Route path="/personalcare/:id" element={<SingleProduct typeOfProduct="personalcare" />}></Route>
            <Route path="/accessories" element={<Products typeOfProduct="accessories" />}></Route>
            <Route path="/accessories/:id" element={<SingleProduct typeOfProduct="accessories" />}></Route>
            <Route path="/cart" element={<MainCartPage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            {/* <Route path="/order" element={<Products typeOfProduct={"order"}/>}></Route>
            <Route path="/contactus" element={<Products typeOfProduct={"contactus"}/>}></Route>
            <Route path="/profile" element={<Products typeOfProduct={"profile"}/>}></Route> */}
            

        </Routes>
    </div>
  )
}
export default AllRoutes