import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

import Blogcard from '../../components/Blogcard/Blogcard'
import ProductCard from '../../components/Product/ProductCard'

const Home = () => {
    return (
        <>
            <section className='homeP1'>
                <div className="container-xl">
                    <div className="row">
                        <div className="col-6">
                            <div className="homeP1__banner-left d-flex justify-content-center py-3 h-100">
                                <img src="images/main-banner-1.jpg" alt="main banner" className='img-fluid' />
                                <div className="homeP1__banner-left-content">
                                    <h6 className='title mb-2' >
                                        SUPERCHARGED FOR PROS
                                    </h6>
                                    <h4 className='product-name mb-4' >Macbook Pro M1</h4>
                                    <p className='price mb-5'>From $999.00 or $41.25/month <br />for 24 months Footnote</p>
                                    <Link className='' to="#buy">
                                        <button className='btn'>Buy Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className='homeP1__banner-right d-flex  py-3 h-100'>
                                <div className="row d-flex  align-item-center" >
                                    <div className="col-6 banner">
                                        <img src="images/catbanner-01.jpg" alt="main banner" className='img-fluid' />
                                        <div className="homeP1__banner-right-content">
                                            <h6 className='title mb-1' >
                                                SUPERCHARGED FOR PROS
                                            </h6>
                                            <h4 className='product-name mb-2' >Macbook Pro M1</h4>
                                            <p className='price mb-3'>From $999.00 or<br />$41.25/month </p>
                                        </div>
                                    </div>
                                    <div className="col-6 banner">
                                        <img src="images/catbanner-02.jpg" alt="main banner" className='img-fluid' />
                                        <div className="homeP1__banner-right-content">
                                            <h6 className='title mb-1' >
                                                SUPERCHARGED FOR PROS
                                            </h6>
                                            <h4 className='product-name mb-2' >Macbook Pro M1</h4>
                                            <p className='price mb-3'>From $999.00 or<br />$41.25/month</p>
                                        </div>
                                    </div>
                                    <div className="col-6 banner">
                                        <img src="images/catbanner-03.jpg" alt="main banner" className='img-fluid' />
                                        <div className="homeP1__banner-right-content">
                                            <h6 className='title mb-1' >
                                                SUPERCHARGED FOR PROS
                                            </h6>
                                            <h4 className='product-name mb-2' >Macbook Pro M1</h4>
                                            <p className='price mb-3'>From $999.00 or<br />$41.25/month</p>
                                        </div>
                                    </div>
                                    <div className="col-6 banner">
                                        <img src="images/catbanner-04.jpg" alt="main banner" className='img-fluid' />
                                        <div className="homeP1__banner-right-content">
                                            <h6 className='title mb-1' >
                                                SUPERCHARGED FOR PROS
                                            </h6>
                                            <h4 className='product-name mb-2' >Macbook Pro M1</h4>
                                            <p className='price mb-3'>From $999.00 or<br />$41.25/month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homeP2'>
                <div className="container-xl">
                    <div className="services row row-cols-5 py-5">
                        <div className="col d-flex justify-content-center">
                            <div className="services__image">
                                <img src="images/service.png" alt="service images" />
                            </div>
                            <div className="services__scripts">
                                <h6>Free Shipping</h6>
                                <p>From all ordersover $99</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="services__image">
                                <img src="images/service-02.png" alt="service images" />
                            </div>
                            <div className="services__scripts">
                                <h6>Daily Surprise Offers</h6>
                                <p>Save upto 25% off</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="services__image">
                                <img src="images/service-03.png" alt="service images" />
                            </div>
                            <div className="services__scripts">
                                <h6>Support 24/7</h6>
                                <p>Shop with an expert</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="services__image">
                                <img src="images/service-04.png" alt="service images" />
                            </div>
                            <div className="services__scripts">
                                <h6>Affordable Prices</h6>
                                <p>Get Factory Default Price</p>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <div className="services__image">
                                <img src="images/service-05.png" alt="service images" />
                            </div>
                            <div className="services__scripts">
                                <h6>Secure Payments</h6>
                                <p>100% Protected Payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homeP3'>
                <div className="container-xl">
                    <div className="row categories">
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-3 categories__item d-flex align-item-center">
                            <div className="scripts d-flex flex-column justify-content-center">
                                <h6>Macbook</h6>
                                <p>10 Items</p>
                            </div>
                            <div className="image">
                                <img src="images/macbook-air.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homeP4' >
                <div className="container-fluid ">
                    <div className="row m-0 w-100">
                        <div className="marquee-wrapper">
                            <Marquee speed={50} gradient={false}>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-01.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-02.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-03.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-04.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-05.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-06.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-07.png" alt="brands" /></div>
                                <div className="image w-25 me-5 ms-5"><img src="images/brand-08.png" alt="brands" /></div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homeP5'>
                <div className="container py-3">
                    <h4>Laptop Collection</h4>
                    <div className="row products">
                        <div className="card1 col-3 p-2">
                            <ProductCard />
                        </div>
                        <div className="card1 col-3 p-2">
                            <ProductCard />
                        </div>
                        <div className="card1 col-3 p-2">
                            <ProductCard />
                        </div>
                        <div className="card1 col-3 p-2">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
            <section className='homeP6'>
                <div className="container-xl">
                    <h4>Our Latest Blogs</h4>
                    <div className="row blog-cards">
                        <div className="card1 col-3 p-2 ">
                            <Blogcard />
                        </div>
                        <div className="card2 col-3 p-2">
                            <Blogcard />
                        </div>
                        <div className="card3 col-3 p-2">
                            <Blogcard />
                        </div>
                        <div className="card4 col-3 p-2">
                            <Blogcard />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home