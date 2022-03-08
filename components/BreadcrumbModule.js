import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const BreadcrumbModule = () => {
  return (
    
    <Grid container sx={{ justifyContent: 'flex-end' }}>
      
        <Grid item xs={12} md={7} >  
     
      <Link underline="hover"  href="/" className='p1'>
        <Typography>
          Home /
          </Typography>
        </Link>
        <Link underline="hover"  href="/dashboard" className='p1' >
          DashBoard /
        </Link>
        <Link
          underline="hover"
          href="/strength"
          className='p1'
        >
          Strength /
        </Link>
        <Link
          underline="hover"
          href="/getting-started/installation/"
          className='p1'
        >
          Functional /
        </Link>
        <Link
          underline="hover"
          href="/getting-started/installation/"
          className='p1'
        >
          Blog /
        </Link>
        
      
      </Grid>
     
      </Grid>

  )
}

export default BreadcrumbModule