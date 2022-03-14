import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';



const Reps =()=>{
    return(
  
     
     <Chip label="4 sets, 12-10 reps" abel="Chip Filled" className='chip' />

    )
}



const LegModule = ({legs}) => {


   return (
        <Box sx={{ width: '100%',padding:'5%'}} className='dashg'>


{legs.map(function (leg,index) {
                return(
                <div key={index}>
                <Grid container   >
                <Grid item xs={12} md={12}  sx={{marginBottom:'10%'}}>
                <span  className='subTitle'>
                Legs: last workout date 
<Chip label={leg.published_at.slice(0,10)} sx={{marginInline:'2%'}}  variant="outlined" />
                
                </span>
                </Grid>

{leg.quadriceps.Frontsquat  ?  <>
                     <Grid item xs={12} md={4} >
     <span  className='p1'>
     {leg.quadriceps.Frontsquat  }
         </span>
         </Grid>
         
        
         <Grid item xs={12} md={8} >
<Reps/>
</Grid>
</> : null}

{leg.quadriceps.Bulgariansplit  ?  <>
<Grid item xs={12} md={4} >
     <span  className='p1'>
        {leg.quadriceps.Bulgariansplit}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

         {leg.quadriceps.Legpress ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {leg.quadriceps.Legpress}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

 {leg.quadriceps.Legextension ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {leg.quadriceps.Legextension}
         </span>
             </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
      
        </> : null}
       
        {leg.hamstring.Deadlift ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {leg.hamstring.Deadlift }
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {leg.hamstring.RomanianDeadlift ?  <>

        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {leg.hamstring.RomanianDeadlift}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {leg.hamstring.LyingLegCurl ?  <>
     
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {leg.hamstring.LyingLegCurl}
        </span>
</Grid>
<Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
</> : null}

{leg.hamstring.RazorCurl ?  <>
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {leg.hamstring.RazorCurl}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        
        </> : null}

        {leg.hamstring.BackExtension ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {leg.hamstring.BackExtension}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {leg.calves.SeatedCalfRaise ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {leg.calves.SeatedCalfRaise}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {leg.calves.CalfRaiseMachine ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {leg.calves.CalfRaiseMachine }
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {leg.calves.DumbbellCalfRaise ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {leg.calves.DumbbellCalfRaise}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {leg.calves.FarmersWalk  ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {leg.calves.FarmersWalk }
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



export default LegModule