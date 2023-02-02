import React from "react"
import "./CompareProductCard.scss"

const CompareProductCard = () => {
  return (
    <div className="compare-product-card position-relative">
      <img
        className="cross position-absolute"
        src="images/cross.svg"
        alt="cross"
      />
      <div
        className="product-image"
        style={{
          backgroundImage: "url('images/dell-xps.png')",
        }}
      ></div>
      <div className="prodcut-details">
        <h3 className="title">Laptop Dell XPS 15 I7/16GB/256GB</h3>
        <div className="infor">
          <div className="d-flex justify-content-between">
            <span>$999</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Brand:</span>
            <span>Dell</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>SKU:</span>
            <span>Latitude E6540</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>CPU</span>
            <span>Intel core i7-4800MQ</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Availability:</span>
            <span>In Stock</span>
          </div>
          <div className="color d-flex justify-content-between">
            <span>Color:</span>
            <span className=" d-inline-flex gap-2">
              <span className="badge bg-danger"></span>
              <span className="badge bg-dark"></span>
              <span className="badge bg-light"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareProductCard
