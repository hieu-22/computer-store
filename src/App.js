import React from "react"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About"
import Contact from "./pages/Contact/Contact"
import Error from "./pages/Error"
import OurStore from "./pages/OurStore/OurStore"
import Blogs from "./pages/Blogs/Blogs"
import CompareProduct from "./pages/CompareProduct/CompareProduct"
import WishList from "./pages/WishList/WishList"
import Login from "./pages/Login/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="account/login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="our-store" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<WishList />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
