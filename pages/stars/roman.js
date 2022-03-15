import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const roman = () => {
  return (
    <Box sx={{ width: '100%',padding:'5%',marginBlock:'5%'}}>
    <Grid container spacing={2} >
{items.map((item,index)=>{
return(
<div key={index}>
<Card sx={{ maxWidth: 345 ,boxShadow: "none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.title}
        />
     <CardContent>
          <Typography gutterBottom  component="div" className='subTitle'>
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Grid item xs={12} md={12}  > 
 
<Chip label={item.monday.title} sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
 </Grid>
<Grid item xs={12} md={12} > 
<p className='p1'>{item.monday.exe1}</p>
<p className='p1'>{item.monday.exe2}</p>
<p className='p1'>{item.monday.exe3}</p>
<p className='p1'>{item.monday.exe4}</p>
<p className='p1'>{item.monday.exe5}</p>
<p className='p1'>{item.monday.exe6}</p>
<p className='p1'>{item.monday.exe7}</p>
</Grid>




    <Grid item xs={12} md={12}  > 
    <Chip label={item.thursday.title}sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
    </Grid>
    <Grid item xs={12} md={12}  > 
    <p className='p1'>{item.thursday.exe1}</p>
<p className='p1'>{item.thursday.exe2}</p>
<p className='p1'>{item.thursday.exe3}</p>
<p className='p1'>{item.thursday.exe4}</p>
<p className='p1'>{item.thursday.exe5}</p>
</Grid>





    <Grid item xs={12} md={12}  > 
    <Chip label="Saturday" sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
    </Grid>
    <Grid item xs={12} md={12} > 
<span className='p1'>{item.saturday}</span>
</Grid>

    <Grid item xs={12} md={12}  > 
    <Chip label="Sunday" sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
    </Grid>

    <Grid item xs={12} md={12} > 
<span className='p1'>{item.sunday}</span>
</Grid>

</div>
)
})}
   



      </Grid>
      </Box>
  )
}
const items = [
    {
      
      title: 'Roman Reigns',
      img: '/stars/Roman_Reigns.jpg',
   monday:{  
     title:'Monday: Legs' ,
      exe1:'Leg / Quad Extensions– 4 sets, 12-16 reps each',
      exe2:'Barbell squats- 4 sets x 8-12 reps',
      exe3:'Dumbbell Bulgarian Split Squats- 4 sets x 8-12 reps',
      exe4:'Hack Squats- 2 sets x 8-12 reps',
      exe5:'Hamstring Lying Curl- 6 sets x 12-14 reps',
      exe6:'Barbell Stiff Leg Deadlift- 4 sets x 10-14 reps',
      },


  thursday:{
    title:'Thursday: Back' ,
    exe1:'Close-grip Pulldowns- 4 sets x 8-12 reps',
    exe2:'Incline Machine Row- 4 sets x 8-12 reps',
    exe3:'High lever Pulldowns- 4 sets x 12-14 reps',
    exe4:'Single Arm Dumbbell Row- 4 sets x 10-14 reps',
    
  },

              saturday:'Off',
              sunday:'Off'
    
  
    },
  ]
  
export default roman