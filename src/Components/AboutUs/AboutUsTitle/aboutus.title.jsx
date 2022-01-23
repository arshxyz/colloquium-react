import React from 'react';
import './aboutus.title.css';

const Title=({children})=>(
    <div className='title'>
        <h2 className='titleHeading'>
        {children}</h2>
    </div>
)
export default Title;