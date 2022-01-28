import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import {Link} from 'react-router-dom';
import { NavBar } from "./Nav";

class Header extends Component {
  render() {
    // if (!this.props.data) return null;

    const project = "this.props.data.project";
    const name = "Debsoc NSUT";
    const description = "The Debating Society of Netaji Subhas University of Technology";
    
    return (
      <header id="home">
        {/* <ParticlesBg type="circle" num={2} color="#ff0000" bg={true} /> */}

        <NavBar/>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 style={{size:'200%'}}>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              {/* <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-trophy"></i>Our Achievements
                </a>
                <Link to ="/about" className="button btn about-btn">
                  <i className="fa fa-info-circle"></i>About us
                </Link>
              </ul> */}
            </Fade>
          </div>
        </div>

        {/* <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p> */}
      </header>
    );
  }
}

export default Header;
