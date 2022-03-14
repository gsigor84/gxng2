import React from 'react'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';





const LayoutModule = ({chests,backs,shoulders,legs,arms}) => {

   return (
        <Box sx={{ width: '100%',padding:'5%'}}>
                  
                  <Grid container >


         <Grid item xs={12} md={12} >

{chests.length > 0 && 

  <Link   href='/dashboard/chest' color="inherit" underline="hover"  > 
<p  className='subTitle'>Chest {chests.published_at}</p>
</Link>
}

</Grid>

<Grid item xs={12} md={12} >
{backs.length > 0 && 
  <Link   href='/dashboard/back' color="inherit" underline="hover"  > 
<p  className='subTitle'>Back</p>
</Link>
}
</Grid>

<Grid item xs={12} md={12} >
{shoulders.length > 0 &&
  <Link   href='/dashboard/shoulder' color="inherit" underline="hover"  > 
<p  className='subTitle'>Shoulders</p>
</Link>
}
</Grid>

<Grid item xs={12} md={12} >
{legs.length > 0 && 
  <Link   href='/dashboard/leg' color="inherit" underline="hover"  > 
<p  className='subTitle'>Legs</p>
</Link>
}
</Grid>

<Grid item xs={12} md={12} >
{arms.length > 0 && 
  <Link   href='/dashboard/arm' color="inherit" underline="hover"  > 
<p  className='subTitle'>Arms</p>
</Link>
}
</Grid>

</Grid>
        </Box>
  )
}



export default LayoutModule