import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const simeon = () => {
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
      
      title: 'Simeon Panda',
      img: '/stars/panda.jpeg',
   monday:{  
     title:'Monday: Chest' ,
      exe1:'Flat dumbbell chest press: 4 x 8-12',
      exe2:'Incline machine chest press: 4 x 8-12',
      exe3:'Machine chest flyes: 4 x 8-12',
      exe4:'Standing cable chest flyes: 4 x 8-12',
      },
  tuesday:{
    title:'Tuesday: Leg' ,
    exe1:'Barbell squats 6 x 8-15',
    exe2:'Barbell pulse squats with handle 6 x 8-15',
    exe3:'Leg press machine 6 x 8-15',
    exe4:'Dumbbell lunges (burnout) 5 rounds',
  },
  wednesday:{
    title:'Wednesday: Back' ,
    exe1:'T-bar row: 8 x 8-12',
    exe2:'Bent over row 8 x 6-15',
    exe3:'Lat pull down 8 x 6-15',
    exe4:'Seated row 8 x 6-15',
    exe5:'Single arm row 6 x 6-10',
  },
  thursday:{
    title:'Thursday: Shoulders' ,
    exe1:'Barbell overhead press 6 x 8 -15',
    exe2:'Shoulder press machine 6 x 8-15',
    exe3:'Dumbbell lateral raise (behind back) 6 x 8-15',
    exe4:'Dumbbell front raise (seated) 6 x 8-15',
    exe5:'Seated rear delt machine 6 x 8-15',
    exe6:'Barbell shrugs 6 x 8-12',
  },
  friday:{
    title:'Friday: Arms' ,
    exe1:'Cable triceps push down 6 x 8-1',
    exe2:'Dumbbell curls with arm blaster 6 x 8-15',
    exe3:'Bodyweight triceps extension 6 x 8-15',
    exe4:'Diamond pushups 6 x 8-15',
    exe5:'Close grip pull-ups 6 x 8-12',
  },
              saturday:'Off',
              sunday:'Off'
    
  
    },
  ]
  

export default simeon