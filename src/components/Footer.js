import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsFacebook } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top py-4">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-5">
                            <div className="footer-top__data d-flex align-item-center">
                                <img src="images/newsletter.png" alt="new" />
                                <h3 className='ms-4 m-0'>Sign Up for Newsletter</h3>
                            </div>
                        </div>
                        <div className="col-7 footer-top__subcribe">
                            <div className="input-group" >
                                <input className="form-control py-1 rounded-start-1 fs-6 px-3" type="text" placeholder="Search Product Here..." />
                                <span className="input-group-text rounded-end-1">Subcribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-middle py-1">
                <div className="container-xl">
                    <div className="row justify-content-between align-item-center py-3">
                        <div className="col-3">
                            <h4 className='mb-4'>Contact us</h4>
                            <address className='footer-middle__links d-flex flex-column gap-1'>
                                <div className='fs-08'>
                                    Computer Shop, <br />
                                    Address: 111 Demo Street District 1 in HCM City <br />
                                    Email: <a href="#email">computershop123@gmail.com</a> <br />
                                    +84 370 000 004
                                </div>
                                <div className='social'>
                                    <Link to="#facebook">
                                        <BsFacebook className='icon' />
                                    </Link>
                                    <Link to="#linkedin">
                                        <BsLinkedin className='icon' />
                                    </Link>
                                    <Link to="#github">
                                        <BsGithub className='icon' />
                                    </Link>
                                    <Link to="#youtube">
                                        <BsYoutube className='icon' />
                                    </Link>
                                    <Link to="#instagram">
                                        <BsInstagram className='icon' />
                                    </Link>
                                </div>
                            </address>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4'>Information</h4>
                            <div className='footer-middle__links d-flex flex-column gap-1'>
                                <Link to="">Privacy Policy</Link>
                                <Link to="">Refund Policy</Link>
                                <Link to="">Shipping Policy</Link>
                                <Link to="">Terms & Conditions</Link>
                                <Link to="">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4'>Account</h4>
                            <div className='footer-middle__links d-flex flex-column gap-1'>
                                <Link to="">Search</Link>
                                <Link to="">About Us</Link>
                                <Link to="">Faq</Link>
                                <Link to="">Contact</Link>
                                <Link to="">Size chart</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4'>Quick Links</h4>
                            <div className='footer-middle__links d-flex'>
                                <div className='d-flex flex-column gap-2'>
                                    <Link to="#">Dell Latitude</Link>
                                    <Link to="#">Dell XPS</Link>
                                    <Link to="#">Lenovo Thinkpad</Link>
                                    <Link to="#">HP Elitebook</Link>
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <Link to="#">Macbook Pro M1</Link>
                                    <Link to="#">Macbook Pro M2</Link>
                                    <Link to="#">Macbook Air M1</Link>

                                </div>
                                <div className='d-flex flex-column'>
                                    <Link to="#">Asus</Link>
                                    <Link to="#">Acer</Link>
                                    <Link to="#">Gigabyte</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom " >
                <div className="container-xl">
                    <div className="row mt-3">
                        <div className="col-12 d-flex align-item-center justify-content-start ">
                            <p className='d-block'>&copy; {new Date().getFullYear()} Powered by Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer