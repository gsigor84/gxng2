import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const therock = () => {
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
<p className='p1'>{item.monday.exe8}</p>
<p className='p1'>{item.monday.exe9}</p>
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
<p className='p1'>{item.tuesday.exe6}</p>
<p className='p1'>{item.tuesday.exe7}</p>
<p className='p1'>{item.tuesday.exe8}</p>
<p className='p1'>{item.tuesday.exe9}</p>

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
<p className='p1'>{item.thursday.exe6}</p>
<p className='p1'>{item.thursday.exe7}</p>
<p className='p1'>{item.thursday.exe8}</p>
<p className='p1'>{item.thursday.exe9}</p>
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
<p className='p1'>{item.friday.exe6}</p>
<p className='p1'>{item.friday.exe7}</p>

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
      
      title: 'The Rock',
      img: '/stars/the_rock.jpeg',
   monday:{  
     title:'Monday: Legs' ,
      exe1:'Running 30-50 minutes – outside or on a treadmill',
      exe2:'Barbell Walking Lunge – 4 sets x25 reps',
      exe3:'Leg Press – 4 sets x 25 reps',
      exe4:'Leg Extensions – 3 sets x 20 reps',
      exe5:'Barbell Squats – 4 sets x 12 reps',
      exe6:'Hack Squats – 4 sets x 12 reps',
      exe7:'Romanian Deadlift – 4 sets x 10 reps',
      exe8:'Seated Leg Curls – 3 sets x 20 reps',
      exe9:'Thigh Abductor – 4 set x 12 reps',
      },
  tuesday:{
    title:'Tuesday: Back' ,
    exe1:'Running 30-50 minutes – outside or on a treadmill',
    exe2:'Wide-Grip Lat Pulldown – 4 sets x 12 reps',
    exe3:'Bent Over Barbell Row – 4 sets x 12 reps',
    exe4:'One Arm Dumbbell Row – 4 sets x 12 reps',
    exe5:'Barbell Deadlift – 3 sets x 10 reps',
    exe6:'Pull-Ups – 3 sets',
    exe7:'Dumbbell Shrug – 4 sets x 12 reps',
    exe8:'Inverted Row – 3 sets',
    exe9:'Hyperextension – 4 sets x 12 reps',
  },
  wednesday:{
    title:'Wednesday: Shoulders' ,
    exe1:'Running 30-50 minutes – outside or on a treadmill',
    exe2:'Standing Military Press – 4 sets x 12 reps',
    exe3:'Front Dumbbell Raise – 4 sets x 12 reps',
    exe4:'Side Lateral Raise – 4 sets x 12 reps',
    exe5:'Reverse Machine Flyes – 4 sets x 15 reps',
    exe6:'Seated Bent Over Rear Delt Raise – 4 sets x 12 reps',
  },
  thursday:{
    title:'Thursday: Arms/Abs' ,
    exe1:'Running 30-50 minutes – outside or on a treadmill',
    exe2:'Dumbbell Bicep Curl – 4 sets x 15 reps',
    exe3:'Hammer Curls – 4 sets x 15 reps',
    exe4:'Spider Curl – 4 sets x 12 reps',
    exe5:'Triceps Pushdown – 4 sets x 15 reps',
    exe6:'Overhead Triceps – 3 sets x 15 reps',
    exe7:'Hanging Leg Raise – 4 sets x 20 reps',
    exe8:'Rope Crunch – 4 sets x 20 reps',
    exe9:'Russian Twist – 4 sets x 20 reps',
   
  },
  friday:{
    title:'Friday: Chest' ,
    exe1:'Running 30-50 minutes – outside or on a treadmill',
    exe2:'Barbell Bench Press, medium grip – 4 sets x 12 reps',
    exe3:'Incline Dumbbell Press – 4 sets x 12 reps',
    exe4:'Dumbbell Bench Press – 4 sets x 12 reps',
    exe5:'Flat Bench Cable Flyes – 4 sets x 15 reps',
    exe6:'Incline Hammer Curls – 4 sets x 12 reps',
    exe7:'Dips, Chest Version – 4 sets x 10-12 reps',
  },
              saturday:'Off',
              sunday:'Off'
    
  
    },
  ]
  
export default therock