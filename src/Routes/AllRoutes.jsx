import React from 'react';
import {Routes,Route} from "react-router-dom";
import Slider from '../Pages/Slider';
import Toys from '../Pages/Toys';
import SingleProduct from '../Pages/SingleProduct';
import Login from '../Pages/Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/toys/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AllRoutes