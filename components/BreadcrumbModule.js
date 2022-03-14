import React from 'react'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useRouter } from 'next/router'




const BreadcrumbModule = () => {
  const router = useRouter()

  const home = {
    color:router.asPath === '/'  ? 'grey' : 'black',
    textDecoration: router.asPath === '/'  ? 'none' : 'underline',

  }
  const dashboard = {
    color: router.asPath === '/dashboard'  ?  'grey'  : 'black',
    textDecoration: router.asPath === '/dashboard'  ? 'none' : 'underline',

  }
  const strength= {
    color:router.asPath === '/strength'  ?    'grey'  : 'black',
    textDecoration: router.asPath === '/strength' ? 'none' : 'underline',

  }
  const functional= {
    color: router.asPath === '/functional'   ?  'grey'  : 'black',
    textDecoration: router.asPath === '/functional'  ? 'none' : 'underline',

  }
  const blog= {
    color: router.asPath === '/blog'  ?  'grey' : 'black',
    textDecoration: router.asPath === '/blog'  ? 'none' : 'underline',

  }



  
  return (
    
    <Grid container className='bread' sx={{justifyContent: 'end'}}>
      
      <Breadcrumbs aria-label="breadcrumb">
  <Link   style={home}  className='bread' color="inherit" href="/">
  Home
  </Link>
  <Link   style={dashboard}  color="inherit" className='bread' href="/dashboard" >
  DashBoard
  </Link>
  <Link  style={strength}    color="inherit" className='bread' href="/strength" >
  Strength
  </Link>
  <Link  style={functional}    color="inherit"className='bread' href="/functional" >
  Functional
  </Link>

</Breadcrumbs>

  
  
      </Grid>

  )
}

export default BreadcrumbModule