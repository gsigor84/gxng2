import React from 'react'
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Reps =()=>{
    return(
        <Grid item xs={12} md={12}  >
        <Stack direction="row" spacing={2}>
        <Grid item xs={8} md={12}>
     <Chip label="10kg" abel="Chip Filled" className='chip' />
     <Chip label="10kg" abel="Chip Filled" className='chip' />
     <Chip label="20kg" abel="Chip Filled" className='chip' />
     <Chip label="20kg" abel="Chip Filled" className='chip' />
     <Chip label="30kg" abel="Chip Filled" className='chip' />
     <Chip label="30kg" abel="Chip Filled" className='chip' />
     </Grid>
   </Stack>
   </Grid>
    )
}



const LayoutModule = ({chests,backs}) => {
 
 console.log(backs)
   return (
    <Grid container sx={{marginRight:'2%',padding:'2%'}}>

       {backs.length > 5  ? <div>
       {backs.map(function (back,index) {
return(

         <p key={index}> {back.pull.Hammer} {back.pull.ReverseCloseGrip}  </p>

)
       })}
       </div>
       
      :<p>No back exe</p> }

{chests.map(function (chest,index) {
                return(
                <Grid container key={index} >

                     <Grid item xs={12} md={12}  >
     <p  className='p1'>
        {chest.upper.bench}
         </p>
<Reps/>
        
     <p  className='p1'>
        {chest.upper.machine}
         </p>
         <Reps/>
         <p  className='p1'>
        {chest.upper.fly}
         </p>

         <p  className='p1'>
        {chest.upper.pushups}
         </p>
        </Grid>

        <Grid item xs={12} md={12}  >
     <p  className='p1'>
        {chest.middle.bench}
         </p>
        
     <p  className='p1'>
        {chest.middle.machine}
         </p>

         <p  className='p1'>
        {chest.middle.fly}
         </p>

         <p  className='p1'>
        {chest.middle.pushups}
         </p>
        </Grid>

        <Grid item xs={12} md={12}  >
     <p  className='p1'>
        {chest.lower.bench}
         </p>
        
     <p  className='p1'>
        {chest.lower.machine}
         </p>

         <p  className='p1'>
        {chest.lower.fly}
         </p>

         <p  className='p1'>
        {chest.lower.pushups}
         </p>
        </Grid>
         
         </Grid>

         

                )
})}

        </Grid>
  )
}



export default LayoutModule