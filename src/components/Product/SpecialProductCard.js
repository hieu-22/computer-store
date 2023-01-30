import React from 'react'
import "./SpecialProductCard.scss"
import ReactStars from 'react-rating-stars-component'


const SpecialProductCard = () => {
    return (
        <div className='special-product-card my-2'>
            <div className="container p-0">
                <div className="row m-0">
                    <div className="col-6 product-images  d-flex flex-column p-0">
                        <div className="main-image"></div>
                        <div className="sub-image row-cols-2 d-flex ">
                            <div className='col sub-image--1'></div>
                            <div className='col sub-image--2'></div>
                        </div>
                    </div>
                    <div className="col-6 product-details">
                        <div className="brand">Dell</div>
                        <h6 className='name'>Dell XPS 9520 2022 15 inch - Core i7/16GB/512GB/RTX 3050/FHD+ - NEW</h6>
                        <ReactStars
                            value={4.5}
                            size={16}
                            edit={false}
                            isHalf={true}
                        />
                        <div className="price">$1299.00 <strike>$1499.00</strike></div>
                        <div className="discount-till d-flex gap-1 align-item-center">
                            <div className='till-days'><span>5</span> days</div>
                            <div className='counter'>
                                <span className='badge rounded-circle bg-danger ms-1'>11</span> :
                                <span className='badge rounded-circle bg-danger ms-1'>11</span> :
                                <span className='badge rounded-circle bg-danger ms-1'>11</span>
                            </div>
                        </div>
                        <div className="product-count">
                            <div className='mb-1'>Sold: 10</div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="add-button">
                            <button className='btn btn-secondary'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProductCard