import React from 'react'
import './ProductCard.scss'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <div className="product-card position-relative">
            <div className="product-card__image"></div>
            <div className="product-card__details">
                <div className="brand">Dell</div>
                <h6 className='name'>Dell XPS 9520 2022 15 inch - Core i7/16GB/512GB/RTX 3050/FHD+ - NEW</h6>
                <ReactStars
                    value={4.5}
                    size={16}
                    edit={false}
                    isHalf={true}
                />
                <div className="price">$1499.00</div>
            </div>
            <div className="wishlist position-absolute">
                <img src="images/wish.svg" alt="wishlist" />
            </div>
            <div className="action-bar  position-absolute">
                <div className="d-flex flex-column">
                    <Link to="">
                        <img className="filter-color" src="images/prodcompare.svg" alt="action bar icon" />
                    </Link>
                    <Link to="">
                        <img className="filter-color" src="images/view.svg" alt="action bar icon" />
                    </Link>
                    <Link to="">
                        <img className="filter-color" src="images/add-cart.svg" alt="action bar icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard