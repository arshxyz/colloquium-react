import React, {useEffect} from "react";
import { Fade } from "react-reveal";
import { NavBar } from "../Nav";
import "./department.css";
import {Grid, Divider, Avatar} from "@mui/material";
import { Footer } from "../Footer";
import akshita from './PD images/akshita.png';
import arpit from './PD images/arpit.png';
import arsh from './PD images/arsh.png';
import charu from './PD images/charu.png';
import kruti from './PD images/kruti.png';
import manan from './PD images/manan.png';
import niharika from './PD images/niharika.png';
import paras from './PD images/paras.png';
import rishab from './PD images/rishab.png';
import rishi from './PD images/rishi.png';
import saumay from './PD images/saumay.png';
import shourya from './PD images/shourya.png';
import stubh from './PD images/stubh.png';
import tushar from './PD images/tushar.png';
import khushi from './PD images/khushi.png';

export const PDDepartment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const members = [
    {name: "Akshita Mohil", desig: "Member, Executive Committee", img: akshita},
    {name: "Arpit Verma", desig: "Member, Executive Committee", img: arpit },
    {name: "Arsh Kohli", desig: "Member, Executive Committee", img: arsh},
    {name: "Charu Taneja", desig: "Member, Executive Committee", img: charu},
    {name: "Khushi Sahay", desig: "Member, Executive Committee", img: khushi},
    {name: "Kruti Joshi", desig: "Member, Executive Committee", img: kruti},
    {name: "Manan Suri", desig: "Member, Executive Committee", img: manan},
    {name: "Niharika Upadhyaya", desig: "Member, Executive Committee", img: niharika},
    {name: "Paras Seth", desig: "Member, Executive Committee", img: paras},
    {name: "Rishab Agrawal", desig: "Member, Executive Committee", img: rishab},
    {name: "Rishi Kumar Rai", desig: "Member, Executive Committee", img: rishi},
    {name: "Saumay Dudeja", desig: "Member, Executive Committee", img: saumay},
    {name: "Shourya Vivek Mittal", desig: "Member, Executive Committee", img: shourya},
    {name: "Stubh Lal", desig: "Member, Executive Committee", img: stubh},
    {name: "Tushar Garg", desig: "Member, Executive Committee", img: tushar}
  ]
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius";
    const achievements = [
    {title: "10 Team breaks", text: "Including DTU PD, Axiom, Rahat and Pearl among others"},
    {title: "9 Adjudication breaks", text: "At IIT-D PD, Venky, SRDF and Pearl among others"},
    ]
    return (
        <>
        <header id="departmentBg">
        {/* <ParticlesBg type="circle" num={2} color="#ff0000" bg={true} /> */}

        <NavBar/>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 >Parliamentary Debating</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 className="dep-byline">An abode for the spirited and the bold who wish to question everything. </h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
      <Grid container justifyContent={"center"} className="mainContent">
        <Grid item xs={12} container justifyContent={"center"}>
          <h2 className="dep-subheading">Who are we?</h2>
        </Grid>
        <Grid item xs={10} md={6} container justifyContent={"center"}>
          <Fade bottom>
          <h2 className="dep-intro"> The Parliamentary Debating Team at NSUT is the epitome of tenacity and dedication. Having been around for more than five years, it has moulded ardent thinkers and dynamic speakers. Weekly debates, training sessions and active participation in tournaments are some key essentials of it.</h2>
          </Fade>
        </Grid>
        <Grid item xs={12} container spacing={4} className="achievements" justifyContent={"center"}>
        
          <Grid item container justifyContent={"center"} xs={12} md={8} className="dep-leftpane">
            <div className="achievements-title">Our Achievements</div>
            <Grid item container xs={12} spacing={4} justifyContent={"center"} alignItems={"flex-start"}>
            {achievements.map((item) => (
              <Grid item container xs={12} md={6} justifyContent={"center"}>
              <Fade bottom>
                <div>
                <h3 className="achievement-topic" style={{textAlign: "center"}}>{item.title}</h3>
                <p className="achievement-text">{item.text}</p>
                </div>  
              </Fade>
              </Grid>
            ))}
            </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"}>
          <h2 className="dep-subheading">PD Team</h2>
          <Grid item container justifyContent={"center"}>
            {members.map((member) => (
          <Grid item className="memberContainer" container xs={6} md={4} justifyContent={"center"}>
                        <Grid item container justifyContent={"center"}>
                          <Grid item container xs={12} justifyContent={"center"}>
                        <Avatar src={member.img}
                        className="facepic" 
                        alt="face"
                        classes={{"img": "facepic"}}
                            />
                            </Grid>
                        </Grid>
                        <Grid item container className={"memName"} justifyContent={"center"}>
                            {member.name}
                        </Grid>
                        <Grid item container className={"memDesignation"} justifyContent={"center"}>
                            {member.desig}
                        </Grid>
                    </Grid>
            ))}
          </Grid>
          </Grid>
      </Grid>
      <Footer/>

      </>
    )
}