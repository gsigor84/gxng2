import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Nav from './NavModule'
import Head from 'next/head'
import Link from "next/link";


const LayoutModule = ({children}) => {
  return (
    <Box className='backGround' sx={{ flexGrow: 1,height:'1100px'}}>
<Head>
  
<Link
            rel="IntegralCF-Bold"
            href="/fonts/IntegralCF-Bold.otf"
            as="font"
            crossOrigin=""
          />
             <Link
            rel="SpaceMono-Regular"
            href="/fonts/SpaceMono-Regular.ttf"
            as="font"
            crossOrigin=""
          />
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