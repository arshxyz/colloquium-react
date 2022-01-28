import React from 'react';
import './card.css';

const Card=({imageUrl,name,position})=>(
    <div className='card'>
    <img src={imageUrl} className="pix"/>
    <h2 className='head'>{name}</h2>
    <h3 className='pos'>{position}</h3> 
    </div>
)

export default Card;