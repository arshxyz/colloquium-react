import React,{ useEffect} from 'react';
import loadjs from 'loadjs';
import { NavBar } from "./Nav"
// import ReactDOM from "react-dom";

function Colloquium(){

    useEffect(() => {
        loadjs('./js/custom.js');
      }, []);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        <NavBar />
         {/* <header className="header navbar">
<a href="#wb1">
     
     <h2 className='headerimg' style={{color: '#000'}}>DebSoc<span style={{color: '#c3152c'}}>.</span></h2>
     </a>
<div className="hamburger">
        <div></div>
        <div></div>
        <div></div>

    </div>

    <div className="hamul">
<div className="cross">X</div>

    <ul>
        <a href="#wb1"><li className="hov">Home</li></a><br/>
        <a href="#wb2"><li className="hov">About</li></a><br/>
        <a href="#wb3"><li className="hov">Events</li></a><br/>
        <a href="#wb4"><li className="hov">Sponsors</li></a><br/>
        <a href="#wb5"><li className="hov">Gallery</li></a>
        <a href="#wb6"><li className="hov">Team</li></a>
        <a href="#wb7"><li className="hov">Contact</li></a><br/>

  </ul>
</div>
    <ul className="headerul">
        <a href="#wb7"><li className="hov">Contact</li></a>
        <a href="#wb6"><li className="hov">Team</li></a>
        <a href="#wb5"><li className="hov">Gallery</li></a>
        <a href="#wb4"><li className="hov">Sponsors</li></a>
        <a href="#wb3"><li className="hov">Events</li></a>
        <a href="#wb2"><li className="hov">About</li></a>
        <a href="#wb1"><li className="hov">Home</li></a>
    </ul>
</header> */}
        <div id="main-slide">
                        
                       <div className="carousel-inner">
                <div className="item active" style={{backgroundImage: 'url(images/hero-area/Colloquium_m.png)', zIndex: 1}} id="wb1">
    
                </div>
            </div>
            </div>
                

            <section id="wb2" className="ts-intro" style={{backgroundColor: '#1e1e1e' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <h1 className="intro-title" style={{color: '#c3152c'}}>ABOUT THE EVENT</h1>
                            <p className="intro-desc" style={{color: '#f8f8f8', width: '85%'}}>The crème de la crème of the Delhi Debating Circuit is finally here, and is going to be better than ever.
Greetings everyone! The Debating Society of NSUT is elated to present to you the 8th edition of our flagship literary and debating festival- Colloquium.<br/>
Despite all restrictions that prevail, this edition of Colloquium promises to be as great as it has been in the past, adding more to the legacy it already has. 

 </p>
                                
                    {/* <div className="section one">
   <div id="button">
     <a href="#wb3" style={{color: '#f6f6f6'}}>Start</a>
      <div className="ring one"></div>
      <div className="ring two"></div>
      <div className="ring three"></div>
      <div className="ring four"></div>
   </div>
   
</div> */}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="row">
                                <div id="gallery" className="intro-gallary">
                                    <div className="col-md-12 col-sm-10 col-xs-12">
                                        <div className="">
                                            <div className="video-container">
                                               <img src="images/hero-area/Colloq.jpeg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ts-intro" className="ts-intro-center">
                <div className="container">
                    <div className="row text-center">
                        <h1 className="section-sub-title">Colloquium 2022</h1>
                        <p className="intro-desc" style={{color: '#c3152c'}}>The wait will be over in ...</p>
                    </div>
                    <div className="gap-40"></div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="countdown text-center">
                                <div className="counter-day">
                                    <span className="days">00</span>
                                    <div className="smalltext">Days</div>
                                </div>
                                <div className="counter-hour">
                                    <span className="hours">00</span>
                                    <div className="smalltext">Hours</div>
                                </div>
                                <div className="counter-minute">
                                    <span className="minutes">00</span>
                                    <div className="smalltext">Minutes</div>
                                </div>
                                <div className="counter-second">
                                    <span className="seconds">00</span>
                                    <div className="smalltext">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <section id="wb3" className="" style={{position: 'relative'}} >
                <div className="row">
                    <div className="columns large-12 text-center">
                        <h2 className="slide-title animated3" style={{color:'black'}}>Events</h2>
                        <br/><br/>
                        <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/pd.png"/>
                                <div className="department-info">
                                    <span className=" section-title" style={{color:'black'}}>NSMPD</span><span className="event-address" style={{color: 'rgb(0, 0, 0)'}}><br/>Parliamentary Debate </span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/lecture_series.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/mun.png"/>
                                <div className="department-info">
                                    <span className="section-title " style={{color:'black'}}>NSUTMUN</span><span className="event-address" style={{color: 'rgb(0, 0, 0)'}}><br/>Model United Nations </span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/instaseed.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/pd.png"/>
                                <div className="department-info">
                                    <span className="section-title " style={{color:'black'}}>In Case You Can</span><span className="event-address" style={{color: 'rgb(0, 0, 0)', padding: '10'}}><br/> Parliamentary Debate</span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/unravel.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/mun.png"/>
                                <div className="department-info">
                                    <span className="section-title " style={{color:'black'}}>IP</span><span className="event-address" style={{color: 'rgb(0, 0, 0)', padding: '10'}}><br/> Parliamentary Debate</span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/global_strategy.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/pd.png"/>
                                <div className="department-info">
                                    <span className="section-title " style={{color:'black'}}>Contendere</span><span className="event-address" style={{color: 'rgb(0, 0, 0)'}}><br/> Parliamentary Debate</span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/startup_combat.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/mun.png"/>
                                <div className="department-info">'
                                    <span className="section-title " style={{color:'black'}}>Fandemic</span><span className="event-address" style={{color: 'rgb(0, 0, 0)'}}><br/>Parliamentary Debate </span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/bellwether.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>
                       <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/pd.png"/>
                                <div className="department-info">
                                    <span className="section-title " style={{color:'black'}}>Drunk History</span><span className="event-address" style={{color: 'rgb(0, 0, 0)'}}><br/> Parliamentary Debate </span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/bellwether.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>

                           <div style={{marginBottom: 50}} className="columns small-6 medium-4 large-3">
                            <div className="">
                                 <img alt="" className="lazy evt_img" src="./images/events/mun.png"/>
                                <div className="department-info">
                                    <span className="section-title " style={{color:'black'}}>A Knack for Wack</span><span className="event-address" style={{color: 'rgb(0, 0, 0)'}}><br/> Parliamentary Debate </span>
                                    <br/>
                                    <br/>
                                    <p><a target="_blank" href="events/bellwether.html" className="button radius" data-open="contact-form" style={{backgroundColor:  '#c3152c'}}style={{color: '#fff !important'}}>Register</a></p>
                                </div>
                            </div>
                        </div>

                         
                        </div>
                    </div>
                
            </section> */}

<section className="events-section" id="wb3">

<h1 className="events-title accent-text" style={{textAlign: 'center'}}>
  <span className="stroke-text-white" style={{color: 'white'}}>Explore </span>Events
</h1>
<div className="event-card-wrapper">
  <div className="event-card">
  <div className="event-info">
      <h2 className="event-title accent-text">NSMPD</h2>
      <p className="event-tagline"><b>Parliamentary Debate</b></p>
      <p className="event-desc">
      One of the most reputed Parliamentary Debating
                                                                Tournament in the Delhi Circuit. With a Team Cap of 32 Teams, and over 150
                                                                participants, NSMPD witnesses the best of Delhi Circuit debating upon a
                                                                plethora of topics, the debate is a beautiful profusion of rationale,
                                                                logic and public speaking.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
    <div className="event-img-wrapper">
      <img src="./images/events/pd.png" alt="event" className="event-image instaseed" />
    </div>
  </div>

  <div className="event-card">
    <div className="event-img-wrapper">
      <img src="./images/events/mun.png" alt="event" className="event-image bellwether" />
    </div>
    <div className="event-info">
      <h2 className="event-title accent-text">NSUTMUN</h2>
      <p className="event-tagline"><b>Model United Nation</b></p>
      <p className="event-desc">
      The biggest model UN Conference in the Delhi Circuit. With hand-picked committees thought after intense deliberations, over 350 Delegates, and an esteemed Executive Board Panel, the conference is the home for a plethora of discussions ranging from Indian Politics to the International Humanitarian Conditions.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
  </div>
  <div className="event-card">

  <div className="event-info">
      <h2 className="event-title accent-text">In Case You Can</h2>
      <p className="event-tagline"><b>The case study competition</b></p>
      <p className="event-desc">
      This Case Study Competition allows for participants to
                                                                deliberate and analyse rigorously selected Cases, which tickle the
                                                                entrepreneurial mind and tests your business acumen. Participants require the
                                                                correct blend of logic, rigour and academic brilliance to ace the competition.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
    <div className="event-img-wrapper">
      <img src="./images/events/pd.png" alt="event" className="event-image startupcombat" />
    </div>

  </div>

  <div className="event-card">
    <div className="event-img-wrapper">
      <img
        src="./images/events/mun.png"
        alt="event" className="event-image unravel" />
    </div>
    <div className="event-info">
      <h2 className="event-title accent-text">International Press</h2>
      <p className="event-tagline"><b>The case study competition</b></p>
      <p className="event-desc">
        A tinge of MUN amalgamated with the wondrous
        concept of entrepreneurship is what the event was all
        about. Entering into the shoes of a company owner, one
        had to deal with the problems arising with different
        countries in a strategic way. Global Strategy- A crossdisciplinary contest of ‘global’ proportions.

      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
  </div>

  <div className="event-card">
  <div className="event-info">
      <h2 className="event-title accent-text">NSMCD</h2>
      <p className="event-tagline"><b>Conventional Debate</b></p>
      <p className="event-desc">
        A tinge of MUN amalgamated with the wondrous
        concept of entrepreneurship is what the event was all
        about. Entering into the shoes of a company owner, one
        had to deal with the problems arising with different
        countries in a strategic way. Global Strategy- A crossdisciplinary contest of ‘global’ proportions.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
    <div className="event-img-wrapper">
      <img
        src="./images/events/pd.png"
        alt="event" className="event-image startupcombat" />
    </div>
  </div>

  <div className="event-card">
    <div className="event-img-wrapper">
      <img
        src="./images/events/pd.png"
        alt="event" className="event-image mockstonks" />
    </div>
    <div className="event-info">
      <h2 className="event-title accent-text">Fandemic</h2>
      <p className="event-tagline"><b>Fan Art Based Graphic Design</b></p>
      <p className="event-desc">
        A tinge of MUN amalgamated with the wondrous
        concept of entrepreneurship is what the event was all
        about. Entering into the shoes of a company owner, one
        had to deal with the problems arising with different
        countries in a strategic way. Global Strategy- A crossdisciplinary contest of ‘global’ proportions.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
  </div>
  <div className="event-card">
  <div className="event-info">
      <h2 className="event-title accent-text">Drunk History</h2>
      <p className="event-tagline"><b>Flash Fiction Writing</b></p>
      <p className="event-desc">
        A tinge of MUN amalgamated with the wondrous
        concept of entrepreneurship is what the event was all
        about. Entering into the shoes of a company owner, one
        had to deal with the problems arising with different
        countries in a strategic way. Global Strategy- A crossdisciplinary contest of ‘global’ proportions.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>    <div className="event-img-wrapper">
      <img
        src="./images/events/mun.png"
        alt="event" className="event-image paneldiscussion" />
    </div>
  </div>
  <div className="event-card">
    <div className="event-img-wrapper">
      <img
        src="./images/events/pd.png"
        alt="event" className="event-image speakersession" />
    </div>
    <div className="event-info">
      <h2 className="event-title accent-text">A Knack for Wack</h2>
      <p className="event-tagline"><b>Poetry Writing</b></p>
      <p className="event-desc">
        A tinge of MUN amalgamated with the wondrous
        concept of entrepreneurship is what the event was all
        about. Entering into the shoes of a company owner, one
        had to deal with the problems arising with different
        countries in a strategic way. Global Strategy- A crossdisciplinary contest of ‘global’ proportions.
      </p>
      <div className="col-sm-6 col-xs-6 col-md-6 col-lg-6 position">
  <a className="button1 a" href="index.html"style={{color: '#fff !important'}}>Register</a>
                       </div>
    </div>
  </div>

</div>


</section>

            <section id="wb4" className="ts-speakers-bg bg-overlay" style={{position:'relative'}}>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="section-sub-title title-white"><span style={{color: '#c3152c'}}>Our </span>Sponsors</h2>
                        <div className="row">
                            <div className="columns large-12 text-center"><br/><br/>
                                <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                    <div className="hvr-outline-out">
                                         <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/frapp.jpg"/>
                    </div>
                                    </div>
                                    <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                        <div className="hvr-outline-out">
                                             <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/freestand.png"/>

                    </div>
                                        </div>
                                        <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                            <div className="hvr-outline-out">
                                                 <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/duexp.png"/>

                    </div>
                                            </div>
                                            <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                <div className="hvr-outline-out">
                                                     <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/jk.png"/>

                    </div>
                                                </div>
                                            </div>
                                            <div className="columns large-12 text-center"><br/>
                                                <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                    <div className="hvr-outline-out">
                                                         <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/ntt.jpeg"/>
            </div>
                                                    </div>
                                                    <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                        <div className="hvr-outline-out">
                                                             <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/ongc.png"/>

            </div>
                                                        </div>
                                                        <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                            <div className="hvr-outline-out">
                                                                 <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/princeton.jpeg"/>

            </div>
                                                            </div>
                                                            <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                                <div className="hvr-outline-out">
                                                                     <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/theedutree.png"/>

            </div>
                                                                </div>
                                                            </div>
                                                            <div className="columns large-12 text-center"><br/><br/>
                                                                <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                                    <div className="hvr-outline-out">
                                                                         <img alt="" height="150px" width="150px" style={{transition: '0.3s ease'}} className="lazy" src="./images/sponsor/twenty19.jpg"/>
    </div>
                                                                    </div>

                                                                        <div style={{marginBottom: 50}} className="hover_item columns small-6 medium-4 large-3">
                                                                            <div className="hvr-outline-out">
                                                                                 <img alt="" height="150px" width="150px" style={{transition: '0.3s ease' }} className="lazy" src="./images/sponsor/dubeat.png"/>

    </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
            </section>
            <section id="wb5" className="gallery">
                <div className="container">
                    <div className="row text-center">
                        {/* <h2 className="section-title" style={{color: '#c3152c'}}>From 2019</h2> */}
                        <h3 className="section-sub-title"><span style={{color: '#c3152c'}}>Photo</span> Gallery</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <div className="gallery-container">
                                <a className="gallery-popup" href="images/gallery/gallery1.jpg">
                             <img alt="" className="img-responsive" src="images/gallery/gallery1.jpg" />
                            <span className="gallery-icon" style={{backgroundColor:  '#c3152c'}}><i className="fa fa-search" ></i></span>
                        </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <div className="gallery-container">
                                <a className="gallery-popup" href="images/gallery/gallery2.jpg">
                             <img alt="" className="img-responsive" src="images/gallery/gallery2.jpg" />
                            <span className="gallery-icon" style={{backgroundColor:  '#c3152c'}}><i className="fa fa-search"></i></span>
                        </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <div className="gallery-container">
                                <a className="gallery-popup" href="images/gallery/gallery3.jpg">
                             <img alt="" className="img-responsive" src="images/gallery/gallery3.jpg" />
                            <span className="gallery-icon" style={{backgroundColor:  '#c3152c'}}><i className="fa fa-search"></i></span>
                        </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <div className="gallery-container">
                                <a className="gallery-popup" href="images/gallery/gallery4.jpg">
                             <img alt="" className="img-responsive" src="images/gallery/gallery4.jpg" />
                            <span className="gallery-icon" style={{backgroundColor:  '#c3152c'}}><i className="fa fa-search"></i></span>
                        </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <div className="gallery-container">
                                <a className="gallery-popup" href="images/gallery/gallery5.jpg">
                             <img alt="" className="img-responsive" src="images/gallery/gallery5.jpg" />
                            <span className="gallery-icon" style={{backgroundColor:  '#c3152c'}}><i className="fa fa-search"></i></span>
                        </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                            <div className="gallery-container">
                                <a className="gallery-popup" href="images/gallery/gallery6.jpg">
                             <img alt="" className="img-responsive" src="images/gallery/gallery6.jpg" />
                            <span className="gallery-icon" style={{backgroundColor:  '#c3152c'}}><i className="fa fa-search"></i></span>
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="wb6" className=" ts-speakers-bg bg-overlay">
                <div className="container">
                    <div className="row text-center">
                        <h3 className="section-sub-title title-white"><span style={{color: '#c3152c'}}>Colloquium</span> Core Committee</h3>

    <div id="owl-demo" className="owl-carousel owl-theme FadeScript">
          
          
  <div className="item_owl">
     <img alt="" src="images/team/Arjun.jpg" className="port"/>

  <div className="overlay">
    <h1 className="text">Arjun </h1>
  <div className="middle1">

    <h2 className="text1">President</h2>
  </div>
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
          
  <div className="item_owl">
     <img alt="" src="images/team/Pragati.jpeg" className="port"/>
    
  <div className="overlay">
    <h1 className="text">Pragati </h1>
  <div className="middle1">
    <div className="text1">President</div>
  </div>
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
          

  <div className="item_owl">
     <img alt="" src="images/team/Nandni.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Nandni</h1>
  <div className="middle1">
    <div className="text1">Vice-President</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
         

  <div className="item_owl">
     <img alt="" src="images/team/Kartikeya.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Kartikeya</h1>
  <div className="middle1">
    <div className="text1">Secretary-General,NSUTMUN</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
          

  <div className="item_owl">
     <img alt="" src="images/team/Anav.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Anav</h1>
  <div className="middle1">
    <div className="text1">Secretary-General,NSUTMUN</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
          

  <div className="item_owl">
     <img alt="" src="images/team/Ananya.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Ananya </h1>
  <div className="middle1">
    <div className="text1">Director-General</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>

            

  <div className="item_owl">
     <img alt="" src="images/team/Shrirang.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Shrirang </h1>
  <div className="middle1">
    <div className="text1">Director-General</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
      

  <div className="item_owl">
     <img alt="" src="images/team/Sai.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Sai</h1>
  <div className="middle1">
    <div className="text1">Director, International Press</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
  
          

  <div className="item_owl">
     <img alt="" src="images/team/Avil.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Avil</h1>
  <div className="middle1">
    <div className="text1">Director, Debating</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>

            

  <div className="item_owl">
     <img alt="" src="images/team/Rahul.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Rahul</h1>
  <div className="middle1">
    <div className="text1">Director, Debating</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>

            

  <div className="item_owl">
     <img alt="" src="images/team/Yajas.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Yajas</h1>
  <div className="middle1">
    <div className="text1">Deputy Director, Debating</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>

            

  <div className="item_owl">
     <img alt="" src="images/team/Kanav.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Kanav</h1>
  <div className="middle1">
    <div className="text1">Director, Literary Events</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>

           

  <div className="item_owl">
     <img alt="" src="images/team/Aditi.jpg" className="port"/>

<div className="overlay">
    <h1 className="text">Aditi</h1>
  <div className="middle1">
    <div className="text1">Deputy Director, Literary Events</div>
  </div>
    
        <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>

            

  <div className="item_owl">
     <img alt="" src="images/team/Pranay.jpg"className="port"/>

<div className="overlay">
    <h1 className="text">Pranay</h1>
  <div className="middle1">
    <div className="text1">Director, Technology</div>
  </div>
    
      <div id="contact-social" className="footer-social middle">
                                <ul>
                                    <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                                    <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                                </ul>
                            </div>
                        </div>
  </div>
 
</div>
                    </div>
                </div>
            </section>
            {/* <section id="wb7" className="ts-venue">
                <div className="container">
                    <div className=" text-center">
                        <h2 className="section-title" style={{color:'#c3152c'}}>Where to find us</h2>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-info ">
                                <div className="contact-info-box">
                                    <i className="fa fa-map-marker" style={{color:'#c3152c'}}>&nbsp;</i>
                                    <div className="contact-info-box-content">
                                        <h4>Address: </h4>
                                        <p>Azad Hind Fauz Marg, Sector-3,Dwarka, New Delhi-110078</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info ">
                                <div className="contact-info-box ">
                                    <i className="fa fa-envelope-o" style={{color:'#c3152c'}}>&nbsp;</i>
                                    <div className="contact-info-box-content">
                                        <h4>Email: </h4>
                                        <p>debsocnsit@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-info-box ">
                                <i className="fa fa-phone" style={{color:'#c3152c'}}>&nbsp;</i>
                                <div className="contact-info-box-content">
                                    <h4>Phone: </h4>
                                    <p>Anyone any : 91-9800000000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            
        </section> */}
        <footer id="wb7" className="footer">

<div className="container">
            <div className=" text-center">
                <h2 className="section-title" style={{color:'#c3152c'}}>Where to find us</h2>
            </div>
            <br/><br/><br/>
            <div className="row">
                <div className="col-md-4">
                    <div className="contact-info ">
                        <div className="contact-info-box">
                            <i className="fa fa-map-marker" style={{color:'#c3152c'}}>&nbsp;</i>
                            <div className="contact-info-box-content">
                                <h4 style={{color: '#fff !important'}}>Address: </h4>
                                <p>Azad Hind Fauz Marg, Sector-3,Dwarka, New Delhi-110078</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-info ">
                        <div className="contact-info-box ">
                            <i className="fa fa-envelope-o" style={{color:'#c3152c'}}>&nbsp;</i>
                            <div className="contact-info-box-content">
                                <h4 style={{color: '#fff !important'}}>Email: </h4>
                                <p>debsoc.nsut@gmail.com<br/>
                                colloquium.nsut@gmail.com
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-info-box ">
                        <i className="fa fa-phone" style={{color:'#c3152c'}}>&nbsp;</i>
                        <div className="contact-info-box-content">
                            <h4 style={{color: '#fff !important'}}>Phone: </h4>
                            <p>Arjun Singh: +91-8979254865</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="container text-center">
        <div className="row">
            <div className="col-md-12">
                    <div id="contact-social" className="footer-social">
                        <ul>
                            <li><a href="https://www.facebook.com/DebsocNSUT/"><i className="fa fa-facebook btn2"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/debating-society-of-nsit/mycompany/"><i className="fa fa-linkedin btn2"></i></a></li>
                            <li><a href="https://www.instagram.com/colloquiumnsut/"><i className="fa fa-instagram btn2"></i></a></li>
                        </ul>
                    </div>
                    <div className="copyright-info">
                        <span>Copyright © 2022 DebSoc NSUT. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
</footer>    
        </>
    );
}

export default Colloquium;
