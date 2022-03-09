import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const index = () => {
  
  return (

    <Grid container spacing={2} sx={{margin:'2%'}}>

{items.map((muscle,index)=>{  
          return(

<Grid item xs={12} md={4} key={index} > 
  <Card sx={{ maxWidth: 345,boxShadow: "none" }}>
    <CardActionArea>
<Link   href={muscle.link} className='subTitle'  > 
<a  className='subTitle' >
      <CardMedia
        component="img"
        height="140"
        image={muscle.img}
        alt="green iguana"
   
      />
      <CardContent> 
        
        <Typography className='subTitle' gutterBottom component="div"> 
         {muscle.title}
         </Typography>
     
      </CardContent> </a> </Link>
    </CardActionArea>
</Card>
</Grid>
)})}

</Grid>

  )
}


const items = [
    {
      img: '/stars/Larry-Wheels.jpeg',
      title: 'CHEST',
      link:'/strength/chest'
    },
    {
      img: '/stars/the_rock.jpeg',
      title: 'BACK',
    },
    {
        img: '/stars/panda.jpeg',
        title: 'SHOULDER',
      },
      {
        img: '/stars/John_Cena.jpg',
        title: 'LEGS',
      },
      {
        img: '/stars/Roman_Reigns.jpg',
        title: 'ARMS',
      },
];


export default index