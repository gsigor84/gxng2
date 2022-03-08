import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BreadcrumbModule from './BreadcrumbModule';


const NavModule = () => {
  return (
    <Box>
        <Grid container >
        <Grid item xs={12} md={4} >
        <p style={{fontSize:'40px',color:'white'}}>
 GXNG
  </p>
  </Grid>
  <Grid item xs={12} md={8} sx={{paddingTop:'3.5%'}} >

<BreadcrumbModule/>

  </Grid>
        </Grid>

        </Box>
  )
}

export default NavModule