import React from "react";
import { Grid, Stack } from "@mui/material";
import SiteBarCore from "../components/SiteBarCore";
import Chart from "../components/Chart";

const Charts =() => {

    const urlList = ["/charts1h","/charts30m","/charts15m"]
    return (
        <Grid container 
        spacing={0} 
        sx={{ height:"100%"}} >
    
            <Grid sx={{height:"100%"}}>
                    <SiteBarCore />
            </Grid>
            <Grid >
            <Stack sx={{ m: 1 }} spacing={{ xs: 2, sm: 2 }} direction="row" useFlexGap >
  
                                <Chart url={urlList[2]} />

                                <Chart url={urlList[0]} />
               
            </Stack>
            <Stack sx={{ m: 1 }} spacing={{ xs: 5, sm: 2 }} direction="row" useFlexGap>
                
                                <Chart url={urlList[1]} />

                                <Chart url={urlList[0]} />

            </Stack>
        </Grid>
    </Grid>
    )
}
export default Charts


