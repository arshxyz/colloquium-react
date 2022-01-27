import React from 'react';
import './card.css';

const Card=({imageUrl,name,position,testimonial})=>(
    <div className='card'>
    <img src={imageUrl} className="img"/>
    <div class="profile-content">
           <div className='position'> 
           <p>{name}</p>
           <p className='pos'>{position}</p> </div>
    </div>
    </div>
)

export default Card;