import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const index = () => {
  
  return (
    
    <Box sx={{ width: '100%',padding:'5%',marginBlock:'5%'}}>
    <Grid container spacing={2} >

{items.map((muscle,index)=>{  
          return(

<Grid item xs={12} md={4} key={index} > 
  <Card sx={{ maxWidth: 345,boxShadow: "none" }}>
    <CardActionArea>
<Link   href={muscle.link} color="inherit" underline="hover"  > 

      <CardMedia
        component="img"
        height="140"
        image={muscle.img}
        alt="green iguana"
   
      />
      <CardContent> 
        
        <Typography  gutterBottom component="div"> 
         <span className='subTitle'>{muscle.title}</span>
         </Typography>
     
      </CardContent>  </Link>
    </CardActionArea>
</Card>
</Grid>
)})}

</Grid>
</Box >
  )
}


const items = [
    {
      img: '/muscles/chest.png',
      title: 'CHEST',
      link:'/strength/chest'
    },
    {
      img: '/muscles/back.png',
      title: 'BACK',
      link:'/strength/back'
    },
    {
        img: '/muscles/shoulders.png',
        title: 'SHOULDER',
        link:'/strength/shoulder'
      },
      {
        img: '/muscles/legs.png',
        title: 'LEGS',
        link:'/strength/leg'
      },
      {
        img: '/muscles/arms.png',
        title: 'ARMS',
        link:'/strength/arm'
      },
];


export default index