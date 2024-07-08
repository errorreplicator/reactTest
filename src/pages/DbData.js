import React from 'react'
import { useState, useEffect } from 'react'
import SiteBarCore from '../components/SiteBarCore'
import { Grid } from "@mui/material";

function DbData() {
    const [data,setData] = useState([{}])
    useEffect ( () => {
        fetch("/charts").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    },[])
  
  
    return (
        <Grid container 
        spacing={0} 
        sx={{display: "flex", height:"100%"}} >
    
            <Grid sx={{height:"100%", paddingRight:"5px"}}>

                    <SiteBarCore />

            </Grid>
            <Grid sx={{height:"100%"}}>
            DbData
            </Grid>
        </Grid>
  )
}

export default DbData
