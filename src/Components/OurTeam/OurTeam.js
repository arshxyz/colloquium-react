import { NavBar } from "../Nav"
import "./ourteam.css";
import Grid from '@mui/material/Grid';

export const OurTeam = () => {
    return (
        <>
        <NavBar/>
        <div className="pagecontent">
            <h2 className="title"> Our Team </h2>
            <div className="teamcontent">
                <Grid container spacing={1}>
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
            </div>
        </div>
        </>
    )
}