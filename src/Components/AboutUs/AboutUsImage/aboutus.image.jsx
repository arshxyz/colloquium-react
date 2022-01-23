import React from 'react';
import './aboutus.image.css';

const Aboutimg=({link})=>(
    <div className='aboutus-img'>
        <img className="about-img" src={link} alt="The Debating society of NSUT" />
    </div>
)

export default Aboutimg;