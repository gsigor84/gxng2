import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const larry = () => {

  
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
    
    title: 'Larry Wheels',
    img: '/stars/Larry-Wheels.jpeg',
 monday:{  
   title:'Monday: Chest' ,
    exe1:'Barbell flat bench press (5 sets, 6-12 reps)',
    exe2:'Incline dumbbell bench press (5 sets, 8-12 reps)',
    exe3:'Decline barbell bench press (5 sets, 8-12 reps)',
    exe4:'Lat pulldown (5 sets, 10-12 reps)',
    exe5:'Pec deck machine (5 sets, 10-12 reps)',
    },
tuesday:{
  title:'Tuesday: Back' ,
  exe1:'Wide grip bodyweight pull-up (4 sets, 10-15 reps)',
  exe2:'Bent over cable lat pulldown (5 sets, 8-12 reps)',
  exe3:'Seated machine row (5 sets, 10-15 reps)',
  exe4:'Single-arm machine row (5 sets, 10-15 reps',
  exe5:'Hammer Strength seated row (5 sets, 10-15 reps)',
},
wednesday:{
  title:'Wednesday: Shoulders' ,
  exe1:'Standing behind the neck shoulder press (5 sets, 6-12 reps)',
  exe2:'Seated dumbbell press (5 sets, 8-12 reps)',
  exe3:'Incline smith machine shoulder press (5 sets, 8-15 reps)',
  exe4:'Side lateral raise machine (5 sets, 10-15 reps)',
  exe5:'Single-arm machine row (5 sets, 10-15 reps)',
},
thursday:{
  title:'Thursday: Legs' ,
  exe1:'Barbell squat (6 sets, 5-8 reps)',
  exe2:'Barbell squat with resistance bands (6 sets, 5-8 reps)',
  exe3:'Incline smith machine shoulder press (5 sets, 8-15 reps)',
  exe4:'Barbell deadlift (6 sets, 5-8 reps)',
  exe5:'Smith machine squat (6 sets, 5-8 reps)',
  exe6:'Smith machine squat (6 sets, 5-8 reps)',
},
friday:{
  title:'Friday: Arms' ,
  exe1:'Cable triceps push down (4 sets, 10-15 reps)',
  exe2:'Seated dumbbell triceps extension (4 sets, 10-15 reps)',
  exe3:'Weighted bench dips (4 sets, 10-15 reps)',
  exe4:'Lying down cable curl (4 sets, 10-15 reps)',
  exe5:'Standing plate curl (4 sets, 10-15 reps)',
  exe6:'EZ bar curl (4 sets to failure)',
},
            saturday:'Off',
            sunday:'Off'
  

  },
]

export default larry