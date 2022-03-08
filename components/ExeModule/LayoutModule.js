import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';



const LayoutModule = ({exes}) => {
  console.log(exes)
  return (
    
    <Grid container sx={{marginRight:'2%',background:'black',padding:'2%'}}>
     
    {exes.map(function (chest,index) {
                return(
                  <Grid container key={index} >
    <Grid item xs={12} md={12} >
     <p  style={{fontSize:'20px',color:'white',fontFamily: 'IntegralCF-Bold'}}>
        chest
         </p>
         </Grid>


         <Grid item xs={12} md={4} >
     <p  style={{fontSize:'20px',color:'white',fontFamily: 'IntegralCF-Bold'}}>
        Upper Section
         </p>
        
         

      
    <p className='p1' >
        
    <Checkbox  className='checkbox'   /> {chest.upper.bench}
    </p>

    <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.fly}
        </p>
        <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.machine}
              </p>
              <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.pushups}
        </p>
   
    </Grid>
          <Grid item xs={12} md={4} >
     <p  style={{fontSize:'20px',color:'white',fontFamily: 'IntegralCF-Bold'}}>
        Upper Section
         </p>

    <p className='p1' >
        
    <Checkbox  className='checkbox'   /> {chest.upper.bench}
    </p>

    <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.fly}
        </p>
        <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.machine}
              </p>
              <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.pushups}
        </p>

    </Grid>
    <Grid item xs={12} md={4} >
     <p  style={{fontSize:'20px',color:'white',fontFamily: 'IntegralCF-Bold'}}>
        Upper Section
         </p>

    <p className='p1' >
        
    <Checkbox  className='checkbox'   /> {chest.upper.bench}
    </p>

    <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.fly}
        </p>
        <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.machine}
              </p>
              <p className='p1' >
        
        <Checkbox  className='checkbox'   /> {chest.upper.pushups}
        </p>

    </Grid>
    


    </Grid>
                )
    })}
    
    </Grid>
    

  )
}


export default LayoutModule