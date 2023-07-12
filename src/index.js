import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './App.css';
import AddUpdateDelete from './Components/AddUpdateDelete';
import ProductComponent from './Components/AddProduct';
import Navbar from './inc/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProductList from './Components/ProductList';

import reportWebVitals from './reportWebVitals';
import Layout from './inc/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './Components/NoPage';
import AddProduct from './Components/AddProduct';
import Login from './Components/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './Components/Signup';
import Cart from './Components/Cart';
import ProductDescription from './Components/ProductDescription';
import Footer from './inc/Footer';
import Category from './Components/Category';
import EditCategory from './Components/EditCategory';
import Logout from './Components/Logout';
import EditProduct from './Components/EditProduct';
import Product from './Components/Product';
import Report from './Components/Report';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="signup_user" element={<Signup />} />

          <Route path="add_product" element={<AddProduct />} />
          <Route path="product" element={<Product />} />

          <Route path="update_product" element={<EditProduct />} />

          <Route path="product_list" element={<ProductList />} />
          <Route path="product_description" element={<ProductDescription />} />
          <Route path="add_category" element={<Category />} />
          <Route path="category_name" element={<EditCategory />} />

          <Route path="cart" element={<Cart />} />
          <Route path="report" element={<Report />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
