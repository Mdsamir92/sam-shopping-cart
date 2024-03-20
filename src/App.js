import React from 'react'
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/productInfo/Product';
import Cartpage from './pages/cart/Cartpage';
import Allproduct from './pages/AllProduct/Allproduct';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import UserDashboard from './pages/user/UserDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import State from "./context/State";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from './ProtectedRoute/User';
import { ProtectedRouteForAdmin } from './ProtectedRoute/Admin';
import Category from './pages/category/Category';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



function App() {
  return (
    <div>


      <State>
        <BrowserRouter>

          <Navbar />
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route exact path='/productinfo/:id' element={<Product />} />
            <Route exact path='/cart' element={<Cartpage />} />
            <Route exact path='/allproduct' element={<Allproduct />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/category/:categoryname' element={<Category />} />

            <Route exact path='/userDashboard' element={<ProtectedRouteForUser><UserDashboard />
            </ProtectedRouteForUser>} />

            <Route exact path='/adminDashboard' element={<ProtectedRouteForAdmin><AdminDashboard />
            </ProtectedRouteForAdmin>} />

            <Route exact path='/addproduct' element={<ProtectedRouteForAdmin><AddProduct />
            </ProtectedRouteForAdmin>} />
            <Route exact path='/updateproduct/:id' element={<ProtectedRouteForAdmin><UpdateProduct />
            </ProtectedRouteForAdmin>} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <Toaster />
      </State>
    </div>
  );
}

export default App;
