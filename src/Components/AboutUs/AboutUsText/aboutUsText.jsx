import React from 'react';
import './aboutUsText.css';
import {ABOUT_DATA,OUR_WORK} from './About_Data';
import AboutUsButton from '../AboutUsButton/AboutUsButton';

const AboutusText=()=>(
    <div className='text'>
        <p>{ABOUT_DATA}</p>
    </div>
)

export default AboutusText;