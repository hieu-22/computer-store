import React from "react"
import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import "./Contact.scss"
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai"
import { FiPhoneOutgoing } from "react-icons/fi"
const Contact = () => {
  return (
    <>
      <Meta title="Our Store" />
      {/* for title - react-helmet*/}

      <BreadCrumb title="Our Store"></BreadCrumb>
      {/* // for breadcrumb */}
      <div className="contact-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="googleMap">
                <iframe
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9765312177715!2d106.77767411411733!3d10.889387960077777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752982a6fb359f%3A0xe48553446b08bad8!2sBcons%20Green%20View!5e0!3m2!1sen!2s!4v1675296460813!5m2!1sen!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowfullScreen={false}
                  loading={"lazy"}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-12">
              <div className="contact d-flex my-3 py-5">
                <div className="contact-form w-50">
                  <h3 className="contact-title">Contact</h3>
                  <div className="">
                    <form>
                      <div class="form-floating ">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          aria-describedby="name"
                          placeholder="name"
                        />
                        <label htmlFor="name" class="form-label">
                          Name
                        </label>
                      </div>
                      <div class="form-floating ">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          aria-describedby="email"
                          placeholder="Email address"
                        />
                        <label htmlFor="email" class="form-label">
                          Email address
                        </label>
                      </div>
                      <div class="form-floating ">
                        <input
                          type="tel"
                          class="form-control"
                          id="phone-number"
                          aria-describedby="phone-number"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="phone-number" class="form-label">
                          Phone Number
                        </label>
                      </div>
                      <div class=" form-floating mb-4">
                        <textarea
                          class="form-control"
                          aria-label="comment"
                          placeholder="Leave a comment here"
                          style={{ height: "160px" }}
                          rows="5"
                        ></textarea>
                        <label htmlFor="comment" class="form-label">
                          Comments
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="contact-infor w-50">
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div className="infor-content">
                    <span>
                      <AiOutlineHome></AiOutlineHome>
                    </span>
                    <span>Quốc lộ 1K, Đông Hoà, Dĩ An, Bình Dương 590000</span>
                  </div>
                  <div className="infor-content">
                    <span>
                      <FiPhoneOutgoing />
                    </span>
                    <span>
                      <a href="tel:+0379xxx654">+0379xxx654</a>
                    </span>
                  </div>
                  <div className="infor-content">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <span>
                      <a href="mailto:hieung180114@gmail.com">
                        hieung180114@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="infor-content">
                    <span>
                      <AiOutlineClockCircle />
                    </span>
                    <span>Monday - Friday 8AM - 10PM</span>
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

export default Contact
