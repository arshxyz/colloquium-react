import { Fade } from "react-reveal"
import { NavBar } from "../Nav"
import "./department.css"
import {Grid, Divider} from "@mui/material"

export const Department = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius";
    const achievements = [{title: "fdjsflddsa", text: lorem}, {title: "Fdjklasf", text:lorem}, {title: "Fdjklasf", text:lorem}]
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
              <h3 className="dep-byline">Conquerors of the Delhi Circuit!</h3>
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
          <h2 className="dep-intro"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.</h2>
          </Fade>
        </Grid>
        <Grid item xs={12} container spacing={4} className="achievements" justifyContent={"center"}>
          <Grid item container justifyContent={"center"} xs={12} md={6} className="dep-leftpane">
            <Fade>
            <img src="https://images.unsplash.com/photo-1642757433561-1985d6b9f642?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzEwNTA2Ng&ixlib=rb-1.2.1&q=80&w=600" alt="fdfda"/>
            </Fade>
          </Grid>
          <Grid item container justifyContent={"center"} xs={12} md={6} className="dep-leftpane">
            <div className="achievements-title">Our Achievements 🏆</div>
            <Grid item container xs={12}  alignItems={"flex-start"}>
            {achievements.map((item) => (
              <Fade bottom>
                <div>
                <h3 className="achievement-topic">{item.title}</h3>
                <p className="achievement-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius quam ut magna ultricies pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius</p>
                <Divider/>
                </div>  
              </Fade>
            ))}
            </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent={"center"}>
          <h2 className="dep-subheading">Meet our team</h2>
          <Grid item container justifyContent={"center"}>
          <Grid item container xs={6} md={3} justifyContent={"center"}>
                        <Grid item container justifyContent={"center"}>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        className="facepic" 
                        alt="face"
                            />
                        </Grid>
                        <Grid item container justifyContent={"center"}>
                            fdfd
                        </Grid>
                    </Grid>
          </Grid>
          </Grid>
      </Grid>


      </>
    )
}