import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Meta from '../../components/Meta'
import './OurStore.scss'


const OurStore = () => {
    return (
        <>
            <Meta title="Our Store" />
            {/* for title - react-helmet*/}

            <BreadCrumb title="Our Store"></BreadCrumb>
            {/* // for breadcrumb */}

            <div className="store-wrapper py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div className='categories-list'>
                                    <ul className='ps-0'>
                                        <li className='filter-content'>Laptop</li>
                                        <li className='filter-content'>Smart Phone</li>
                                        <li className='filter-content'>PC</li>
                                        <li className='filter-content'>Accessories</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Filter by
                                </h3>
                                <div className="availability">
                                    <h3 className="subtitle">Availability</h3>
                                    <div className="form-check filter-content">
                                        <input className="form-check-input" type="checkbox" value="" id="in-stock" />
                                        <label className="form-check-label" for="in-stock">
                                            In Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check filter-content">
                                        <input className="form-check-input" type="checkbox" value="" id="out-stock" />
                                        <label className="form-check-label" for="out-stock">
                                            Out of Stock (0)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random
                                </h3>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore