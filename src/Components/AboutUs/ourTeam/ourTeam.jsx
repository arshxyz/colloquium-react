import React from 'react';
import './ourTeam.css';
import team from '../teamdata'; 
import Card from '../Card';

const OurTeam=()=>(    
    <div className="team-body">
        {team.map(({name,position,testimonial,imageUrl})=><Card 
            name={name}
            position={position}
            imageUrl={imageUrl}
            testimonial={testimonial}
            />)}

    </div>
);

export default OurTeam;
