import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';



const Reps =()=>{
    return(
  
     
     <Chip label="4 sets, 12-10 reps" abel="Chip Filled" className='chip' />

    )
}



const BackModule = ({backs}) => {

   return (
        <Box sx={{ width: '100%',padding:'5%'}} className='dashg'>


{backs.map(function (back,index) {
                return(
                <div key={index}>
                <Grid container   >

                <Grid item xs={12} md={12}  sx={{marginBottom:'10%'}}>
                <span  className='subTitle'>
                Back: last workout date 
<Chip label={back.published_at.slice(0,10)} sx={{marginInline:'2%'}}  variant="outlined" />
                
                </span>
                </Grid>
{back.pull.Hammer ?  <>
                     <Grid item xs={12} md={4} >
     <span  className='p1'>
     {back.pull.Hammer}
         </span>
         </Grid>
         
        
         <Grid item xs={12} md={8} >
<Reps/>
</Grid>
</> : null}

{back.pull.WideGrip ?  <>
<Grid item xs={12} md={4} >
     <span  className='p1'>
        {back.pull.WideGrip}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

         {back.pull.StraightArm ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {back.pull.StraightArm}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

 {back.pull.ReverseCloseGrip ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {back.pull.ReverseCloseGrip}
         </span>
             </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
      
        </> : null}
       
        {back.pull.VBar ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {back.pull.VBar}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {back.pull.ParallelGrip ?  <>

        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.pull.ParallelGrip}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {back.rows.BarbellRow ?  <>
     
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {back.rows.BarbellRow}
        </span>
</Grid>
<Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
</> : null}

{back.rows.ReverseGripBarbellRow ?  <>
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {back.rows.ReverseGripBarbellRow}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        
        </> : null}

        {back.rows.DumbbellRow ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {back.rows.DumbbellRow }
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {back.rows.ProneIncline ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.rows.ProneIncline}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {back.rows.TBarRow ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.rows.TBarRow }
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {back.extensions.ReverseHyper ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.extensions.ReverseHyper}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {back.extensions.ExtensionsonBench ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.extensions.ExtensionsonBench}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {back.extensions.TwistingHype ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.extensions.TwistingHype}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {back.extensions.InclineReverseHyper?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {back.extensions.InclineReverseHyper}
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



export default BackModule