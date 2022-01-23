import React from 'react';
import './AboutUsPage.css';
import AboutusText from './AboutUsText/aboutUsText';
import Aboutimg from './AboutUsImage/aboutus.image';
import Title from './AboutUsTitle/aboutus.title';
import AboutUsButton from './AboutUsButton/AboutUsButton';
import AboutUsSubheading from './AboutUsSubHead/subhead';
import { NavBar } from '../Nav';

const AboutUs = () => (
	<>
    <NavBar/>

	<div>
		<div className="image">
			<Aboutimg link="https://images.unsplash.com/photo-1533035336122-4327d347d2fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
		</div>
		<div className="flex-container">
			<div className="flex-child title">
				<Title>Who are we?</Title>
				<AboutusText />
				<AboutUsButton className="about-button" />
			</div>
			<div className="flex-child subhead">
				<AboutUsSubheading />
			</div>
		</div>
	</div>
	</>
);

export default AboutUs;
