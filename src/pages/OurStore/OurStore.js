import React, { useState } from "react"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import "./OurStore.scss"
import { Link } from "react-router-dom"
import ProductCard from "../../components/Product/ProductCard"
import SpecialProductCard from "../../components/Product/SpecialProductCard"

const OurStore = () => {
  let [grid, setGrid] = useState(3)

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
              <div className="store-filter">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div className="categories-list">
                    <ul className="ps-0">
                      <li className="filter-content">Laptop</li>
                      <li className="filter-content">Smart Phone</li>
                      <li className="filter-content">PC</li>
                      <li className="filter-content">Accessories</li>
                    </ul>
                  </div>
                </div>

                <div className="filter-card mb-3">
                  <h3 className="filter-title">Filter by</h3>
                  <div className="availability">
                    <h3 className="subtitle">Availability</h3>
                    <div className="form-check filter-content">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="in-stock"
                      />
                      <label className="form-check-label" htmlFor="in-stock">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check filter-content">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="out-stock"
                      />
                      <label className="form-check-label" htmlFor="out-stock">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>

                  <div className="price">
                    <h3 className="subtitle">Price</h3>
                    <div className="from-container d-flex gap-1">
                      <div className="from d-flex align-item-center">
                        <div className="dolar-sign">$</div>
                        <form className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="price-from"
                            placeholder="0"
                          />
                          <label htmlFor="price-from">from</label>
                        </form>
                      </div>
                      <div className="to d-flex align-item-center">
                        <div className="dolar-sign">$</div>
                        <form className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="price-to"
                            placeholder="0"
                          />
                          <label htmlFor="price-to">to</label>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="colors">
                    <h3 className="subtitle">Colors</h3>
                    <ul className="d-flex flex-row flex-wrap gap-2">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>

                  <div className="size">
                    <h3 className="subtitle">Size</h3>
                    <div className="form-check  filter-content">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-xl"
                      />
                      <label className="form-check-label" htmlFor="size-xl">
                        xl (2)
                      </label>
                    </div>
                    <div className="form-check filter-content">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-large"
                      />
                      <label className="form-check-label" htmlFor="size-large">
                        large (2)
                      </label>
                    </div>
                    <div className="form-check filter-content">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size-small"
                      />
                      <label className="form-check-label" htmlFor="size-small">
                        small (2)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="filter-card mb-3">
                  <h3 className="filter-title">Product Tags</h3>
                  <div className="product-tags d-flex flex-wrap gap-2">
                    <Link to="">
                      <span class="tag badge rounded-pill bg-secondary">
                        Dell
                      </span>
                    </Link>
                    <Link to="">
                      <span class="tag badge rounded-pill bg-secondary">
                        Lenovo Thinkpad
                      </span>
                    </Link>
                    <Link to="">
                      <span class="tag badge rounded-pill bg-secondary">
                        MSI
                      </span>
                    </Link>
                    <Link to="">
                      <span class="tag badge rounded-pill bg-secondary">
                        Acer
                      </span>
                    </Link>
                    <Link to="">
                      <span class="tag badge rounded-pill bg-secondary">
                        Asus
                      </span>
                    </Link>
                    <Link to="">
                      <span class="tag badge rounded-pill bg-secondary">
                        Apple
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="store-products ">
                <div className="filter-sort-grid d-flex w-100 justify-content-between mb-5">
                  <div className="sort-by-picker d-flex gap-2">
                    <p className="sort-label mb-0">Sort By: </p>
                    <select
                      class="form-select select-field"
                      aria-label="Default select example"
                    >
                      <option value="1" defaultValue>
                        In stock
                      </option>
                      <option value="2">Out stock</option>
                      <option value="3"> Price: high to low</option>
                      <option value="4"> Price: low to high</option>
                      <option value="5"> Size: small to large</option>
                      <option value="6"> Size: large to small</option>
                    </select>
                  </div>
                  <div className="product-layout d-flex gap-1">
                    <p className="products-counter">21 products</p>
                    <span
                      className="layout-type badge"
                      onClick={() => setGrid(3)}
                    >
                      <img src="images/gr4.svg" alt="grid" />
                    </span>
                    <span
                      className="layout-type badge"
                      onClick={() => setGrid(4)}
                    >
                      <img src="images/gr3.svg" alt="grid" />
                    </span>
                    <span
                      className="layout-type badge"
                      onClick={() => setGrid(6)}
                    >
                      <img src="images/gr2.svg" alt="grid" />
                    </span>
                    <span
                      className="layout-type badge"
                      onClick={() => setGrid(12)}
                    >
                      <img src="images/gr.svg" alt="grid" />
                    </span>
                  </div>
                </div>
                <div className="products">
                  <div className="row">
                    <ProductCard gridType={grid} />
                    <ProductCard gridType={grid} />
                    <ProductCard gridType={grid} />
                    <ProductCard gridType={grid} />
                    <ProductCard gridType={grid} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore
