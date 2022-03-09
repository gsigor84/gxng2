import React from 'react'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';



const BreadcrumbModule = () => {
  return (
    
    <Grid container className='bread' sx={{justifyContent: 'end'}}>
      
      <Breadcrumbs aria-label="breadcrumb">
  <Link  sx ={{textDecorationLine: 'none'}}color="inherit" href="/">
  Home
  </Link>
  <Link   underline="hover" color="inherit" href="/dashboard" >
  DashBoard
  </Link>
  <Link   underline="hover" color="inherit" href="/strength" >
  Strength
  </Link>
  <Link   underline="hover" color="inherit" href="/" >
  Functional
  </Link>
  <Link  underline="hover" color="inherit" href="/" >
  Blog 
  </Link>
  

</Breadcrumbs>

  
  
      </Grid>

  )
}

export default BreadcrumbModule