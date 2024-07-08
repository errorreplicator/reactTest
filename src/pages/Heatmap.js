import React from "react";
import { Grid } from "@mui/material";
import HeatM1 from "../charts/HeatM1"
import SiteBarCore from "../components/SiteBarCore";
import Box from '@mui/material/Box';


const Heatmap =() => {

    return (

        <Grid container 
        spacing={0} 
        sx={{display: "flex", height:"100%"}} >
    
            <Grid sx={{height:"100%", paddingRight:"5px"}}>

                    <SiteBarCore />

            </Grid>
            <Grid sx={{height:"100%"}}>
            <Box height={500}
                width={700}
                >
            <HeatM1 />
            </Box>
            </Grid>
        </Grid>

    )
}

export default Heatmap