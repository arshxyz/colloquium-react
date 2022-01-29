
import React from 'react';
import { useEffect } from 'react';
import './AboutUsPage.css';
import cover from './AboutUsImage/cover.png';
import logo from './AboutUsImage/debsoc.png';
import { NavBar } from '../Nav';
import { Footer } from '../Footer';
import AboutUsContent from './AboutUsContent';
import OurTeam from './ourTeam/ourTeam';
import { Fade } from 'react-reveal';

function AboutUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg">
			<NavBar />
			<div id="main-slide">
                       <div className="carousel-inner">
                <div className="item active" style={{backgroundImage: 'url(images/hero-area/dep.png)', zIndex: 1}} id="wb1">
                <div className="row banner">
          <div className="banner">
            <Fade bottom>
              <h1 >About Us</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 className="dep-byline">Meet our Team </h3>
            </Fade>
            <hr />
          </div>
        </div>
        </div>
        </div>
        </div>
			<div className="content">
				<Fade bottom>
					<img alt="hi" src={logo} className="sign" />
				</Fade>
				<AboutUsContent />
			</div>
			<hr />
			<br />
			<div className="Team">
				<div className="our">
					<Fade bottom>
						<h1>Meet The Team </h1>
					</Fade>
					<br />
				</div>
				<OurTeam />
			</div>
            <Footer/>
		</div>
	);
}

export default AboutUs;
