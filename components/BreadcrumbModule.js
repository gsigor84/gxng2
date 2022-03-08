import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



const BreadcrumbModule = () => {
  return (
    
    <Grid container sx={{ justifyContent: 'flex-end' }}>
      
        <Grid item xs={12} md={7} >  
     
      <Link underline="hover"  href="/">
        <Typography className='p1'>
          Home /
          </Typography >
        </Link>
        <Link underline="hover"  href="/dashboard"  >
        <Typography className='p1'>
          DashBoard /
          </Typography >
        </Link>
        <Link  underline="hover"  href="/strength" >
        <Typography className='p1'>
          Strength /
          </Typography >
        </Link>
        <Link underline="hover"href="/getting-started/installation/">
        <Typography className='p1'>
          Functional /
          </Typography >
        </Link>
        <Link
          underline="hover"  href="/getting-started/installation/" >
           <Typography className='p1'>
          Blog 
          </Typography >
        </Link>
        
      
      </Grid>
     
      </Grid>

  )
}

export default BreadcrumbModule