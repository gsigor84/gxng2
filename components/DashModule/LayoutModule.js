import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';



const Reps =()=>{
    return(
  
     
     <Chip label="5 sets, 12-10 reps" abel="Chip Filled" className='chip' />

    )
}



const LayoutModule = ({chests,backs}) => {

   return (
        <Box sx={{ width: '100%' }}>


{chests.map(function (chest,index) {
                return(
                <div key={index}>
                <Grid container   >
{chest.upper.bench ?  <>
                     <Grid item xs={12} md={4} >
     <span  className='p1'>
        {chest.upper.bench}
         </span>
         </Grid>
         
        
         <Grid item xs={12} md={8} >
<Reps/>
</Grid>
</> : null}

{chest.upper.machine ?  <>
<Grid item xs={12} md={4} >
     <span  className='p1'>
        {chest.upper.machine}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

         {chest.upper.fly ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {chest.upper.fly}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

 {chest.upper.pushups ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {chest.upper.pushups}
         </span>
             </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
      
        </> : null}
       
        {chest.middle.bench ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {chest.middle.bench}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {chest.middle.machine ?  <>

        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {chest.middle.machine}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {chest.middle.fly ?  <>
     
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {chest.middle.fly}
        </span>
</Grid>
<Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
</> : null}

{chest.middle.pushups ?  <>
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {chest.middle.pushups}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        
        </> : null}

        {chest.lower.bench ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {chest.lower.bench}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {chest.lower.machine ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {chest.lower.machine}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {chest.lower.fly ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {chest.lower.fly}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {chest.lower.pushups ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {chest.lower.pushups}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         
         </Grid>
         
       

         </div>

                )
})}

        </Box>
  )
}



export default LayoutModule