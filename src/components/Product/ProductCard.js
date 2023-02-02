import React from "react"
import "./ProductCard.scss"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const ProductCard = (props) => {
  let { gridType, backgroundImage } = props
  let location = useLocation() // return object { pathname: relative-url,...}

  return (
    // if "/store" page => set product card with corresponding gridtype, else ""
    <div
      className={`px-2 ${
        location.pathname == "/our-store" ? `col-${gridType}` : ""
      }`}
    >
      <div className="product-card position-relative">
        <div
          className="product-card__image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="product-card__details">
          <div className="brand">Dell</div>
          <h6 className="name">
            <a href="http://localhost:3000/#product">
              Dell XPS 9520 2022 15 inch - Core i7/16GB/512GB/RTX 3050/FHD+ -
              NEW
            </a>
          </h6>
          <ReactStars value={4.5} size={16} edit={false} isHalf={true} />
          <p
            className={`description ${gridType === 12 ? "d-block" : "d-none"}`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ea
            ipsum exercitationem quasi ullam cupiditate natus sapiente numquam
            quae dolore!
          </p>
          <div className="price">$1499.00</div>
        </div>
        <div
          className={`cross position-absolute ${
            location.pathname == "/wishlist" ? "d-block" : "d-none"
          }`}
        >
          <img src="images/cross.svg" alt="cross" />
        </div>
        <div
          className={`wishlist position-absolute ${
            location.pathname == "/wishlist" ? "d-none" : "d-block"
          }`}
        >
          <img src="images/wish.svg" alt="wishlist" />
        </div>
        <div className="action-bar  position-absolute">
          <div className="d-flex flex-column">
            <Link to="">
              <img
                className="filter-color"
                src="images/prodcompare.svg"
                alt="action bar icon"
              />
            </Link>
            <Link to="">
              <img
                className="filter-color"
                src="images/view.svg"
                alt="action bar icon"
              />
            </Link>
            <Link to="">
              <img
                className="filter-color"
                src="images/add-cart.svg"
                alt="action bar icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
