import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const john = () => {
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
    <Chip label={item.tuesday.title} sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
    </Grid>

    <Grid item xs={12} md={12}  > 
    <p className='p1'>{item.tuesday.exe1}</p>
<p className='p1'>{item.tuesday.exe2}</p>
<p className='p1'>{item.tuesday.exe3}</p>
<p className='p1'>{item.tuesday.exe4}</p>
<p className='p1'>{item.tuesday.exe5}</p>

</Grid>

    <Grid item xs={12} md={12}  > 
    <Chip label={item.wednesday.title} sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
    </Grid>
    <Grid item xs={12} md={12} > 
    <p className='p1'>{item.wednesday.exe1}</p>
<p className='p1'>{item.wednesday.exe2}</p>
<p className='p1'>{item.wednesday.exe3}</p>
<p className='p1'>{item.wednesday.exe4}</p>
<p className='p1'>{item.wednesday.exe5}</p>
<p className='p1'>{item.wednesday.exe6}</p>
<p className='p1'>{item.wednesday.exe7}</p>
<p className='p1'>{item.wednesday.exe8}</p>
<p className='p1'>{item.wednesday.exe9}</p>
<p className='p1'>{item.wednesday.exe10}</p>
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
    <Chip label={item.friday.title} sx={{fontSize:'20px'}}   variant="outlined"   className='chip' />
    </Grid>
    <Grid item xs={12} md={12} > 
    <p className='p1'>{item.friday.exe1}</p>
<p className='p1'>{item.friday.exe2}</p>
<p className='p1'>{item.friday.exe3}</p>
<p className='p1'>{item.friday.exe4}</p>
<p className='p1'>{item.friday.exe5}</p>
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
      
      title: 'John Cena',
      img: '/stars/John_Cena.jpg',
   monday:{  
     title:'Monday: Legs and Calves' ,
      exe1:'Seated Calf Raises – 10 sets of 10-20 reps',
      exe2:'Standing Calf Raises – 4 sets of 25 reps',
      exe3:'Standing Single Leg Curls – 4 sets of 20-25 reps',
      exe4:'Leg Press – 5 sets of 20 reps',
      exe5:'Leg Extension – 4 sets of 15 reps',
      exe6:'Squats – 4 sets of 10 reps',
      exe7:'Hack Squats – 3 sets of 15 reps',
      },
  tuesday:{
    title:'Tuesday: Chest' ,
    exe1:'Incline Machine Press – 3-4 sets of 20 reps',
    exe2:'Incline Bench Press – 3-4 sets of 20 reps',
    exe3:'Machine flies – 3-4 sets of 15 reps',
    exe4:'Cable flies – 3 sets of 15 reps',
    exe5:'Bench Press – 3 sets of 10 reps',
  },
  wednesday:{
    title:'Wednesday: Arms' ,
    exe1:'Standing Barbell Curls – 3 sets of 10-12 reps',
    exe2:'Preacher Curls – 5 sets of 12 reps',
    exe3:'Seated Dumbbell Curls – 3 sets of 10-12 reps',
    exe4:'Standing Cable Curls – 3 sets of 12 reps',
    exe5:'Rope Press downs – 3 sets of 20 reps',
    exe6:'Single Arm Cable Pushdowns – 3 sets of 10 reps',
    exe7:'Lying Tricep Extension – 6 sets to failure',
    exe8:'Overhead Skull Crushers – 3 sets of 20 reps',
    exe9:'Standing Cable Curls – 3 sets of 12 reps',
    exe10:'Tricep Dip – 4 sets to failure',
  },
  thursday:{
    title:'Thursday: Shoulder' ,
    exe1:'Side Lateral Raise – 5 sets x 12-15 reps',
    exe2:'Dumbbell Front Raises* – 4 sets x 10 reps',
    exe3:'Reverse Machine Press – 5 sets x 10 reps',
    exe4:'Machine Shoulder Leg Press** – 4 sets x 10 reps',
    exe5:'Upright EZ Bar Row – 4 sets x 12-15 reps',
  },
  friday:{
    title:'Friday: Back' ,
    exe1:'Wide Grip Cable Row – 4-5 sets x 12-15 reps',
    exe2:'Cable Pullover – 3-4 sets x 12-15 reps',
    exe3:'Single Arm Cable Row – 3 sets x 12-15 reps',
    exe4:'Standing Overhand Cable Row – 3 sets x 12-15 reps',
    exe5:'Standing Underhand Cable Row – 3 sets x 12-15 reps',
    exe6:'Lat Pull Down – 4-5 sets x 12-15 reps',
  },
              saturday:'Off',
              sunday:'Off'
    
  
    },
  ]
  
export default john