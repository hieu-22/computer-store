import React from "react"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import ProductCard from "../../components/Product/ProductCard"
import "./WishList.scss"
const WishList = () => {
  return (
    <>
      <Meta title="WishList" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <ProductCard backgroundImage="images/dell-xps.png" />
            </div>
            <div className="col-3">
              <ProductCard backgroundImage="images/macbook-air.jpg" />
            </div>
            <div className="col-3">
              <ProductCard backgroundImage="images/dell-xps.png" />
            </div>
            <div className="col-3">
              <ProductCard backgroundImage="images/macbook-air.jpg" />
            </div>
            <div className="col-3">
              <ProductCard backgroundImage="images/dell-xps.png" />
            </div>
            <div className="col-3">
              <ProductCard backgroundImage="images/macbook-air.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WishList
