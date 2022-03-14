import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';



const Reps =()=>{
    return(
  
     
     <Chip label="4 sets, 12-10 reps" abel="Chip Filled" className='chip' />

    )
}



const ArmModule = ({arms}) => {

   return (
        <Box sx={{ width: '100%',padding:'5%'}} className='dashg'>


{arms.map(function (arm,index) {
                return(
                <div key={index}>
                <Grid container   >

                <Grid item xs={12} md={12}  sx={{marginBottom:'10%'}}>
                <span  className='subTitle'>
                Arms: last workout date 
<Chip label={arm.published_at.slice(0,10)} sx={{marginInline:'2%'}}  variant="outlined" />
                
                </span>
                </Grid>

{arm.biceps.StandingDumbbell ?  <>
                     <Grid item xs={12} md={4} >
     <span  className='p1'>
     {arm.biceps.StandingDumbbell }
         </span>
         </Grid>
         
        
         <Grid item xs={12} md={8} >
<Reps/>
</Grid>
</> : null}

{arm.biceps.InclineDumbbell ?  <>
<Grid item xs={12} md={4} >
     <span  className='p1'>
        {arm.biceps.InclineDumbbell }
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

         {arm.biceps.Chinup ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {arm.biceps.Chinup }
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

 {arm.biceps.RegularEZ ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {arm.biceps.RegularEZ}
         </span>
             </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
      
        </> : null}
       
        {arm.biceps.ConcentrationCurl ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {arm.biceps.ConcentrationCurl}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {arm.biceps.StandingCable ?  <>

        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.biceps.StandingCable}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {arm.biceps.SmithMachine ?  <>
     
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {arm.biceps.SmithMachine}
        </span>
</Grid>
<Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
</> : null}

{arm.triceps.Skullcrusher ?  <>
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {arm.triceps.Skullcrusher}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        
        </> : null}

        {arm.triceps.CloseGripBench ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {arm.triceps.CloseGripBench}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {arm.triceps.TricepsDip ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.triceps.TricepsDip }
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {arm.triceps.TricepsMachine ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.triceps.TricepsMachine }
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {arm.triceps.DumbbellOverhead ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.triceps.DumbbellOverhead}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {arm.triceps.CablePushDown ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.triceps.CablePushDown }
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {arm.triceps.CloseGripPushUp ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.triceps.CloseGripPushUp}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {arm.triceps.CableKickBack ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {arm.triceps.CableKickBack}
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



export default ArmModule