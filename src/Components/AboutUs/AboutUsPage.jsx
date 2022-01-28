import React from 'react';
import './AboutUsPage.css';
import cover from './AboutUsImage/img.jpg';
import logo from './AboutUsImage/debsoc.png';
import { NavBar } from "../Nav";
import { Footer } from "../Footer";
import AboutUsContent from './AboutUsContent';
import OurTeam from './ourTeam/ourTeam';
import {Fade} from "react-reveal"

function AboutUs() {
    return (
        <div className='bg'>
            <NavBar />
            <Fade>
                <img alt="hi" src={cover} className='cover'></img>
            </Fade>
            <div className='content'>
                <Fade bottom>
                <img alt="hi" src={logo} className='logo'></img>
                </Fade>
                <AboutUsContent/>
            </div>
            <hr></hr>
            <br></br>
            <div className='Team'>
                <div className='our'>
                    <Fade bottom>
                        <h1>Meet The Team </h1>
                    </Fade>
                    <br></br>
                </div>
                <OurTeam/>
            </div>
            <footer />
        </div>
    );
}

export default AboutUs;