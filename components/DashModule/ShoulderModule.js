import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';



const Reps =()=>{
    return(
  
     
     <Chip label="4 sets, 12-10 reps" abel="Chip Filled" className='chip' />

    )
}



const LayoutModule = ({shoulders}) => {

   return (
        <Box sx={{ width: '100%',padding:'5%'}} className='dashg'>


{shoulders.map(function (shoulder,index) {
                return(
                <div key={index}>
                <Grid container   >
                <Grid item xs={12} md={12}  sx={{marginBottom:'10%'}}>
                <span  className='subTitle'>
                Shoulders: last workout date 
<Chip label={shoulder.published_at.slice(0,10)} sx={{marginInline:'2%'}}  variant="outlined" />
                
                </span>
                </Grid>

{shoulder.anterior.ArnoldPresses ?  <>
                     <Grid item xs={12} md={4} >
     <span  className='p1'>
     {shoulder.anterior.ArnoldPresses}
         </span>
         </Grid>
         
        
         <Grid item xs={12} md={8} >
<Reps/>
</Grid>
</> : null}

{shoulder.anterior.FrontArmRaises?  <>
<Grid item xs={12} md={4} >
     <span  className='p1'>
        {shoulder.anterior.FrontArmRaises}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

         {shoulder.anterior.MilitaryPress?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {shoulder.anterior.MilitaryPress}
         </span>
         </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
         </Grid>
         </> : null}

 {shoulder.anterior.MilitaryPressDumbbell  ?  <>
         <Grid item xs={12} md={4} >
         <span  className='p1'>
        {shoulder.anterior.MilitaryPressDumbbell }
         </span>
             </Grid>
         <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
      
        </> : null}
       
        {shoulder.anterior.UprightRows ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {shoulder.anterior.UprightRows}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {shoulder.anterior.UprightRowsCable?  <>

        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {shoulder.anterior.UprightRowsCable}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}

        {shoulder.medial.ArmCable ?  <>
     
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {shoulder.medial.ArmCable }
        </span>
</Grid>
<Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
</> : null}

{shoulder.medial.BarbellOverhead ?  <>
        <Grid item xs={12} md={4} >
         <span  className='p1'>
        {shoulder.medial.BarbellOverhead}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        
        </> : null}

        {shoulder.medial.SwitchSide ?  <>
        <Grid item xs={12} md={4}  >
        <span  className='p1'>
        {shoulder.medial.SwitchSide }
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {shoulder.rear.SingleArmBent ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {shoulder.rear.SingleArmBent}
        </span>
        </Grid>
        <Grid item xs={12} md={8} >
         <Reps/>
        </Grid>
        </> : null}
        
        {shoulder.rear.CableMachine ?  <>
        <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {shoulder.rear.CableMachine }
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {shoulder.rear.RearDeltoid ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {shoulder.rear.RearDeltoid }
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {shoulder.rear.DumbbellIncline?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {shoulder.rear.DumbbellIncline}
        </span>
         </Grid>
         <Grid item xs={12} md={8} >
          <Reps/>
         </Grid>
         </> : null}

         {shoulder.rear.DumbbellBentOver ?  <>
         <Grid item xs={12} md={4}  >
         <span  className='p1'>
        {shoulder.rear.DumbbellBentOver }
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