import React from 'react';
import './AboutUsPage.css';
import { Fade } from "react-reveal"

function AboutUsContent(){
    return(
    <div className='who'>
        <Fade bottom>
        <h1 style={{textTransform: 'capitalize'}}>Who are we ?</h1>
        </Fade>

        <Fade bottom>
        <p>
            Founded in 2008, the Debating Society of NSUT is the premier debating 
            and literary society on campus for one of India's most prestigious and 
            coveted technical institutions, Netaji Subhas University of Technology 
            and is one of North India's most successful debating teams with several
            annual accolades not just in the North Indian debating circuits but 
            beyond the borders of India as well.
        </p>
        </Fade>
        <Fade bottom>
        <p>
            With an aim to promote healthy discussion and careful deliberation, the 
            Debating Society of NSUT provides people with a platform to shed their 
            inhibitions and learn the art of expressing themselves. One of the most 
            renowned debating societies in the DU circuit, it hosts literary and 
            debating events all throughout the year that help students gain confidence
        </p>
        </Fade>
    </div>
    );
}

export default AboutUsContent;