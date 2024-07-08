import React from 'react'
import { Grid, Stack } from "@mui/material";
import SiteBarCore from '../components/SiteBarCore';

function Embed() {
  
  return (
    <Grid container 
    spacing={0} 
    sx={{display: "flex", height:"100%"}} >

        <Grid sx={{height:"100%"}}>

                <SiteBarCore />

        </Grid>
        <Grid sx={{height:"100%", padding:"5px"}}>
        Embed
        </Grid>
    </Grid>



)
}

export default Embed
