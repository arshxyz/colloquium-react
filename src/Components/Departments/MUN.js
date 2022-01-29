import React, {useEffect} from "react"
import { Fade } from "react-reveal"
import { NavBar } from "../Nav"
import "./department.css"
import {Grid, Divider, Avatar} from "@mui/material"
import { Footer } from "../Footer"
import aditya from "./MUN images/aditya.png"
import anvesha from "./MUN images/anvesha.png"
import arpita from "./MUN images/arpita.png"
import charchit from "./MUN images/charchit.png"
import harsh from "./MUN images/harsh.png"
import neel from "./MUN images/neel.png"
import parth from "./MUN images/parth.png"
import piyush from "./MUN images/piyush.png"
import prajeet from "./MUN images/prajeet.png"
import pranit from "./MUN images/pranit.png"
import rachit from "./MUN images/rachit.png"
import rishabh from "./MUN images/rishabh.png"
import shashank from "./MUN images/shashank.png"
import shyamal from "./MUN images/shyamal.png"
import siddhant from "./MUN images/siddhant.png"
import somya from "./MUN images/somya.png"
import vinamra from "./MUN images/vinamra.png"
import yash from "./MUN images/yash.png"

export const MUNDepartment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const members = [
      {name: "Aditya Khulbe", desig: "Member, Executive Committee", img: aditya},
      {name: "Anvesha Kashyap", desig: "Member, Executive Committee", img: anvesha},
      {name: "Arpita Johry", desig: "Member, Executive Committee", img: arpita},
      {name: "Charchit Goel", desig: "Member, Executive Committee", img: charchit},
      {name: "Harsh Kumar", desig: "Member, Executive Committee", img: harsh},
      {name: "Neel Taneja", desig: "Member, Executive Committee", img: neel},
      {name: "Parth Rohatgi", desig: "Member, Executive Committee", img: parth},
      {name: "Piyush Sharma", desig: "Member, Executive Committee", img: piyush},
      {name: "Prajeet Katari", desig: "Member, Executive Committee", img: prajeet},
      {name: "Pranit Chaddha", desig: "Member, Executive Committee", img: pranit},
      {name: "Rachit Gupta", desig: "Member, Executive Committee", img: rachit},
      {name: "Rishabh Raj", desig: "Member, Executive Committee", img: rishabh},
      {name: "Shashank Mishra", desig: "Member, Executive Committee", img: shashank},
      {name: "Shyamal Jain", desig: "Member, Executive Committee", img: shyamal},
      {name: "Siddhant Srivastava", desig: "Member, Executive Committee", img: siddhant},
      {name: "Somya Chauhan", desig: "Member, Executive Committee", img: somya},
      {name: "Vinamra Harkar", desig: "Member, Executive Committee", img: vinamra},
      {name: "Yash Mudgil", desig: "Member, Executive Committee", img: yash},
    ]
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius";
    const achievements = [
    {title: "57 Individual Awards", text: "Conquered biggest MUN circuits including IIT-D, Thapar, Stockholm and many more."},
    {title: "3 Best Delegations", text:"At Ramjas MUN, Quintessence MUN and Thapar MUN."},
    ]
    return (
        <>
        <header id="departmentBg">
        {/* <ParticlesBg type="circle" num={2} color="#ff0000" bg={true} /> */}

        <NavBar/>
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 >Model United Nations</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3 className="dep-byline">“Ponder, propose, parley, persuade and procure with prudence” - MUN in a nutshell</h3>
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
          <h2 className="dep-subheading">Who we are</h2>
        </Grid>
        <Grid item xs={10} md={6} container justifyContent={"center"}>
          <Fade bottom>
          <h2 className="dep-intro">
          With multiple executive board level members of the circuit being a part of DebSoc NSUT, the MUN dept is one of the strongest competitive teams of any kind at NSUT. Being adjudged as the best delegation in over half the conferences it attends, the MUN dept. provides one with a chance to not only experience moments of victory but to organize conferences, learning to work with your peers, juniors and seniors alike, voicing your opinions, moulding and adapting ideas, analyzing, strategizing and optimizing the solutions to problems.
          </h2>
          </Fade>
        </Grid>
        <Grid item xs={12} container spacing={4} className="achievements" justifyContent={"center"}>
        
          <Grid item container justifyContent={"center"} xs={12} md={8} className="dep-leftpane">
            <div className="achievements-title">Our Achievements </div>
            <Grid item container xs={12}  justifyContent={"center"} alignItems={"flex-start"}>
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
          <h2 className="dep-subheading">MUN Team</h2>
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