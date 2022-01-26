import React from 'react';
import './card.css';

const Card=({imageUrl,name,position,testimonial})=>(
    <div className='card'>
    <div class="profile-card-4 text-center">
    <img src={imageUrl} class="img img-responsive"/>
    <div class="profile-content">
           <div className='position'> 
           <p>{name}</p>
           <p className='pos'>{position}</p> </div>
        <div class="profile-description">{testimonial}</div>
    </div>
    </div>
    </div>
)

export default Card;