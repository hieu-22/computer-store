import React from "react"
import "./CompareProduct.scss"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import CompareProductCard from "../../components/Product/CompareProductCard"

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Product" />
      {/* for title - react-helmet*/}

      <BreadCrumb title="Compare Product"></BreadCrumb>
      {/* // for breadcrumb */}
      <div className="compare-product-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6 p-4">
              <CompareProductCard />
            </div>
            <div className="col-6 p-4">
              <CompareProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareProduct
