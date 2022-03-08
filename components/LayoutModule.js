import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Nav from './NavModule'
import Head from 'next/head'


const LayoutModule = ({children}) => {
  return (
    <Box className='backGround' sx={{ flexGrow: 1,height:'1100px'}}>
<Head>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet"/>
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