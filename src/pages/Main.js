import React from "react";
import { Grid} from "@mui/material";
import SiteBarCore from "../components/SiteBarCore";


const Main =() => {
    return (
        <Grid container 
        spacing={0} 
        sx={{display: "flex", height:"100%"}} >
    
            <Grid sx={{height:"100%"}}>

                    <SiteBarCore />

            </Grid>
            <Grid sx={{height:"100%", padding:"5px"}}>
            Homepage
            </Grid>
        </Grid>



    )
}

export default Main