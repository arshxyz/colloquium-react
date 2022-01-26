import React from 'react';
import './AboutUsPage.css';
import cover from './AboutUsImage/varsity.jpeg';
import logo from './AboutUsImage/debsoc.png';
import { NavBar } from "../Nav";
import { Footer } from "../Footer";
import AboutUsContent from './AboutUsContent';
import OurTeam from './ourTeam/ourTeam';

function AboutUs() {
    return (
        <div >
            <NavBar />
            <img alt="hi" src={cover} className='cover'></img>
            <div className='content'>
                <img alt="hi" src={logo} className='logo'></img>
                <AboutUsContent/>
            </div>
            <hr></hr>
            <div className='Team'>
                <div className='our'>
                    <h1>Our Team </h1>
                </div>
                <OurTeam></OurTeam>
            </div>
            <footer />
        </div>
    );
}

export default AboutUs;