import { Button } from 'react-bootstrap'
import React from 'react'
import './Blogcard.scss'

const Blogcard = () => {
    return (
        <div className="blog-card">
            <div className="blog-card__image">
                {/* use background-image in page's style (scss,css) */}
            </div>
            <div className="blog-card__content">
                <div className='date'>01/01/2023</div>
                <h6 className='title'>The best laptops in 2023</h6>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veniam....</p>
                <Button className='button'>READ MORE</Button>
            </div>
        </div>
    )
}

export default Blogcard