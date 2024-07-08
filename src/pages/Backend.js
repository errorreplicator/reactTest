import React, { useEffect, useState } from 'react'
import SiteBarCore from '../components/SiteBarCore'
import { Grid } from '@mui/material'

function Backend() {

    const [data,setData] = useState([{}])

    useEffect ( () => {
        fetch("/members").then(
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
                                <div>

                                    {
                                        (typeof data.members === 'undefined') ?(<p>Loading...</p>) : (
                                            data.members.map((member, i) => (<p key={i}>{member}</p>))
                                        )
                                    }

                                    </div>
                                </Grid>
                        </Grid>                     
            
  )
} export default Backend
