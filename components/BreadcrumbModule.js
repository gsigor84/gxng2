import React from 'react'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



const BreadcrumbModule = () => {
  return (
    
    <Grid container sx={{justifyContent: 'end'}}>
      
      
      <Link   href="/" >
        
 
          <a>
          Home
        </a>
   
 
        </Link>
       

        <Typography className='p1'>
 /
        </Typography>
       
  

        <Link  href="/dashboard"  >
        
     
          <a>
          DashBoard
           </a>
      
         
        </Link>
     
      
        <Typography className='p1'>
 /
        </Typography>

   
        <Link  href="/strength" >
        
        
          <a>
        Strength
         </a>
   
         
        </Link>
 
      
        <Typography className='p1'>
 /
        </Typography>
       

      
        <Link href="/getting-started/installation/">
        <a>

        Functional

        </a>
        </Link>
  
      
        <Typography className='p1'>
 /
        </Typography>
      
      
        <Link   href="/getting-started/installation/" >
        <a>

          Blog 
       
          </a>
        </Link>
  
  
      </Grid>

  )
}

export default BreadcrumbModule