import React from "react"
import "./Blogs.scss"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Blogcard from "../../components/Blogcard/Blogcard"

const Blogs = () => {
  return (
    <>
      <Meta title="Blogs" />
      {/* for title - react-helmet*/}

      <BreadCrumb title="Blogs"></BreadCrumb>
      {/* // for breadcrumb */}

      <div className="blogs-wrapper">
        <div className="container-xl">
          <div className="row py-5">
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
              </div>
            </div>
            <div className="col-9">
              <div className="row blogs-list">
                <div className="col-6">
                  <Blogcard />
                </div>
                <div className="col-6">
                  <Blogcard />
                </div>
                <div className="col-6">
                  <Blogcard />
                </div>
                <div className="col-6">
                  <Blogcard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
