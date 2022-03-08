import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Nav from './NavModule'
import Head from 'next/head'


const LayoutModule = ({children}) => {
  return (
    <Box className='backGround' sx={{ flexGrow: 1,height:'1100px'}}>
<Head>
    <link href="/styles/Home.module.css" rel="stylesheet"/>
</Head>

    <Grid container sx={{padding:'2%',height:'100%' }}>
    <Grid item xs={12} md={12}>
<Nav/>
</Grid>

<Grid item xs={12} md={12} sx={{height:'1100px'}}>
        {children}
        </Grid>
        </Grid>
    </Box>
  
  )
}

export default LayoutModule