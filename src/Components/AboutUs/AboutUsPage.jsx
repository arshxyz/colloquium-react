import React, { useEffect } from 'react';
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
			<Fade>
				<img alt="hi" src={cover} className="cover" />
			</Fade>
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
