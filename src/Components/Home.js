import React from "react";
import Header from "./Header";
import "./home/css/style.css"; 
import Department from "./dept"


function Home(){
    return (
      <div className="App">
        <Header/>
        <Department/>
        {/* <div id="fh5co-features">
            <div className="container" style={{color: 'white'}}>
                <div className="services-padding">
                    <div className="row">
                        <div className="col-md-4 animate-box">
                            <div className="feature-left">
                                <span className="icon">
                                    <img className="depts" alt="" src="images/un.png"/>
                                  
                                </span>
                                <div className="feature-copy bottompad">
                                    <h3 style={{color: 'white'}}>MUN</h3>
                                    <p className="lead" style={{fontStyle: 'italic', marginTop: '10px'}}>“Ponder, propose, parley, persuade and procure with prudence”</p>
                                    <p className="text1" style={{marginBottom: '0px'}}>Being adjudged as the best delegation in over half the conferences it attends, the MUN dept. provides one with a chance to not only experience moments of victory but to organize conferences, learning to work with your peers, juniors and seniors alike, voicing your opinions, moulding and adapting ideas, analyzing, strategizing and optimizing the solutions to problems.</p>
                                    <p style={{color: 'white', fontStyle: 'bold', fontSize: '18px'}}><a href="munpage.html">Learn More!</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 animate-box">
                            <div className="feature-left">
                                <span className="icon">
                                    <img className="depts pd" src="./home/images/pd.png"/>
                                   
                                </span>
                                <div className="feature-copy bottompad">
                                    <h3 style={{color: 'white'}}>PD</h3>
                                    <p className="lead" style={{fontStyle: 'italic', marginTop: '10px'}}>“An abode for the spirited and the bold who wish to question everything.”</p>
                                    <p className="text1" style={{marginBottom: '0px'}}>The Parliamentary Debating Team at NSUT is the epitome of tenacity and dedication. Having been around for more than five years, it has moulded ardent thinkers and dynamic speakers. Weekly debates, training sessions and active participation in tournaments are some key essentials of it.</p>
                                    <p style={{color: 'white', fontStyle: 'bold', fontSize: '18px'}}><a href="pdpage.html">Learn More!</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginright:'0'}}>

                        <div className="col-md-4 animate-box">
                            <div className="feature-left">
                                <span className="icon">
                                    <img className="depts" src="./home/images/gd.png"/>
                                </span>
                                <div className="feature-copy">
                                    <h3 style={{color: 'white'}}>General Debating</h3>
                                    <p className="lead" style={{fontStyle: 'italic', marginTop: '10px'}}>"Encouraging and inspiring minds to speak what they stand for, what they believe in, one NSUTian at a time."</p>
                                    <p className="text1" style={{marginBottom: '0px'}}>The General Department has always stood by the students, especially the freshers’, helping them get a grip over their language skills and fluency, and improving their spontaneity and creativity. Our doors are always open to anybody who is willing to learn and grow. With events like Thursdays At DebSoc, we train willing debaters and give them a chance to try out new formats of debating each week to hone their skills.</p>
                                    <p style={{color: 'white', fontStyle: 'bold', fontSize: '18px'}}><a href="general.html">Learn More!</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 animate-box">
                            <div className="feature-left">
                                <span className="icon">
                                    <img className="depts" src="./images/ptt.png"/>
                                </span>
                                <div className="feature-copy bottompad">
                                    <h3 style={{color: 'white'}}>The Page Turners</h3>
                                    <p className="lead" style={{fontStyle: 'italic', marginTop: '10px'}}>"We’re a group of readers, thinkers and writers. So open a book, and turn the page"</p>
                                    <p className="text1" style={{marginBottom: '0px'}}>The Page Turners was founded in 2015, as a group of people enthusiastic about reading and writing. It has grown to be an integral part of DebSoc, with some of the most popular events during Colloquium under its ambit. It conducts regular activities and maintains a stream of consistent, diverse literary content through its online presence.</p>
                                    <p style={{color: 'white', fontStyle: 'bold', fontSize: '18px'}}><a href="pageturners.html">Learn More!</a></p>
                                </div>
                            </div>
                        </div>

                    </div>
                        <div className="row">
                        <div className="col-md-4 animate-box">
                            <div className="feature-left">
                                <span className="icon">
                                    <img className="depts tech" src="images/tech.png"/>
                                </span>
                                <div className="feature-copy">
                                    <h3 style={{color: 'white'}}>Tech&Design</h3>
                                    <p className="lead" style={{fontStyle: 'italic', marginTop: '10px'}}>"Technology is intelligence exemplified, while Design is intelligence made visible"</p>
                                    <p className="text1" style={{marginBottom: '0px'}}>The Technology and Design Department of DebSoc NSUT works to fullfill every Technological demands of the society. From making poster to Adobe Illustrator renders for flexes, to developing and managing the website for the society, the Tech&Design department is arguably one of the most efficient departments under Debsoc.</p>
                                    <p style={{color: 'white', fontStyle: 'bold', fontSize: '18px'}}><a href="tech.html">Learn More!</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 animate-box">
                            <div className="feature-left">
                                <span className="icon">
                                    <i className="icon-genius"></i>
                                </span>
                                <div className="feature-copy">
                                    <h3 style={{color: 'white'}}>Colloquium</h3>
                                    <p className="lead" style={{fontStyle: 'italic', marginTop: '10px'}}>"The Annual Debating and Literary Festival of NSUT, Colloquium has been a very successful event, comprising of various formats of debate as well as panel discussions."</p>
                                    <p className="text1" style={{marginBottom: '0px'}}>Colloquium, since its inception, has been expanding its reach in terms of the number and diversity of activities as well as the number of participants. It integrates various formats of debate under one conglomerate of three days. During Colloquium, we host the annual NSUT MUN,the NSUT PD Tournament, alongwith English and Hindi Conventional Debates.</p>
                                    <p style={{color: 'white', fontStyle: 'bold', fontSize: '18px'}}><a href="https://www.facebook.com/ColloquiumNsit/">Learn More!</a></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div> */}
        <div id="fh5co-wireframe">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-'center' fh5co-heading">
                        <h2 style={{textAlign: "center", marginTop:'40px'}}>From the Presidents' Desk</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 animate-box" >
                        <div className="user-frame" style={{textAlign: 'center'}}>
                          <div className="container-fluid px-0">
                             
                               <img src="./images/team/Arjun.jpg" className="presidents" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                        
                        <h3>Home away from home</h3>
                            <p>DebSoc NSUT is a platform that not only provides a safe space for deliberation and discussion, but is a home 
                                away from home, a family where everyone works on motivating others to be the best versions of themselves, 
                                in all aspects of life. <br/>With days spent debating, and nights spent reminiscing on those memories and making 
                                new ones, DebSoc is truly the most wholesome society I’ve had an opportunity to be a part of.</p>
                            <span>Tushar Renjhen</span><br/>
                            <small>President, DebSoc</small>
                            </div>
                        </div>
                    </div>
                   
                <div className="col-md-6 animate-box">
                    <div className="user-frame" style={{textAlign: 'center'}}>
                      <div className="container-fluid px-0">
                    <img src="./images/team/Rahul.jpg" className="presidents" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                    <h3>A place to learn and grow</h3>
       <p>Being one of the most active and thriving societies across the debating circuit, DebSoc NSUT is a stranger to none. Whether it be 
       winning countless accolades every year or organizing Delhi’s largest debating and literary festival, we really are able to do it all. 
       DebSoc isn’t just a society for us, it is also an experience filled with sleepless nights and rewarding days. It is home to days of 
       debates and discussions spread over the sprawling campus, through which our enforced camaraderie turned into a happy family. Being a 
       part of The Debating Society of NSUT has truly been a life changing journey and I hope the society continues to live upto its glorious 
       legacy for years to come.</p>
                            
                        <span>Rahul Sharma</span><br/>
                        <small>President, DebSoc</small>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div id="fh5co-wireframe">
            <div className="container">
                <div className="row animate-box">
                    <div style={{marginTop: '1rem', marginBottom: 0}} class="col-md-8 col-md-offset-2 text-'center' fh5co-heading">
                        <h2 style={{textAlign: "center", marginTop:'40px'}}>The HNMUN Experience</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 animate-box">
                        <div className="user-frame">
                            <div className="container-fluid px-0">
                                <img src="./images/team/Rahul.jpg" class="presidents" alt="..."/>
                            </div>
                            <h3 style={{textAlign: 'center'}}>HNMUN Delegation'20</h3>
                            <p style={{textAlign: 'center'}}>My HNMUN journey was an amazing one, fair to say, it was a life changing 
                                opportunity for me. I could have never asked for anything better in my final year. I consider myself lucky 
                                to have led such a talented, dedicated and diverse bunch which I now call family.  Four months of training 
                                brought out the best in each of us, we grew individually and also as a team. The kind of exposure HNMUN gave 
                                me is unparalleled, from being a shy person to voicing my opinion and debating in front of 200 delegates was 
                                an enriching experience. On the way, I made loads of memories which I will cherish for a lifetime. The journey 
                                of four months of rigorous training to 4 successful days of conference, being a part of the “Indian Delegation”
                                 and holding the Indian flag with pride was definitely a once-in-a-lifetime experience.</p>
                            <span>Sanskriti Kocher</span><br/>
                            <small>MUN Team, DebSoc</small>
                        </div>
                    </div>
                    <div className="col-md-6 animate-box">
                        <div className="user-frame">
                            <div class="container-fluid px-0">
                                <img src="images/Pawan-HN.jpg" class="presidents" alt="..."/>
                            </div>
                            <h3 style={{textAlign: 'center'}}>HNMUN Delegation'20</h3>
                            <p style={{textAlign: 'center'}}>My HNMUN journey is something that I probably will draw satisfaction from, for a very long time. I found people I spent close to four months together with, and was pretty much forced to fall in love with. They are people I have memories with that I’ll cherish for a very long time. And yet right now, I find it extremely hard to put my feelings down in plain words, if any.<br/>
                                Although the entire journey has probably been the most physically, and academically taxing experience of my entire life, the grandeur of the moment as one stands before people from literally all over the world, a proud winner from India, is unparalleled.</p>
                            <span>Pawan Singh</span><br/>
                            <small>MUN Team, DebSoc</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    </div>
    )
  }

  export default Home;