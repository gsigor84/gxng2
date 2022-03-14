import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import functional from 'pages/functional';



const Reps =()=>{
    return(
  
     
     <Chip label="4 sets, 12-10 reps" abel="Chip Filled" className='chip' />

    )
}



const functionals = ({functionals}) => {

   return (
        <Box sx={{ width: '100%',padding:'5%'}} className='dashg'>


{functionals.map(function (functional,index) {
                return(
                <div key={index}>
                <Grid container   >

                <Grid item xs={12} md={12}  sx={{marginBottom:'10%'}}>
                <span  className='subTitle'>
                Functional: last workout date 
<Chip label={functional.published_at.slice(0,10)} sx={{marginInline:'2%'}}  variant="outlined" />
                Total workouts: <Chip label={functional.id} sx={{marginInline:'2%'}}  variant="outlined" />
                </span>
                </Grid>

{functional.FRONTSQUAT ?  <>
                     <Grid item xs={12} md={4} >
     <span  className='p1'>
     {functional.FRONTSQUAT}
         </span>
         </Grid>
         
        
         <Grid item xs={12} md={8} >
<Reps/>
</Grid>
</> : null}

{functional.RENEGADEROW ?  <>
<Grid item xs={12} md={4} >
     <span  className='p1'>
     {functional.RENEGADEROW}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

         {functional.INVERTEDROW ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {functional.INVERTEDROW }
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

 {functional.KETTLEBELLSWING ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {functional.KETTLEBELLSWING}
         </span>
             </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
      
        </> : null}
       
        {functional.UPDOWNPLANK ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {functional.UPDOWNPLANK}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {functional.CROSSBODY ?  <>

        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {functional.CROSSBODY}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {functional.STEPUPTOOVERHEAD ?  <>
     
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {functional.STEPUPTOOVERHEAD}
        </span>
</Grid>
<Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
</> : null}

{functional.LUNGEOVERHEAD ?  <>
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {functional.LUNGEOVERHEAD}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        
        </> : null}

        {functional.FEETELEVATED ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {functional.FEETELEVATED}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {functional.CLOSEGRIP ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {functional.CLOSEGRIP}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {functional.BURPEEBROAD?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {functional.BURPEEBROAD}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {functional.BARBELLROLLOUT?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {functional.BARBELLROLLOUT}
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



export default functionals