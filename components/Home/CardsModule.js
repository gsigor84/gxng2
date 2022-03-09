import React from 'react'
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function CardsModule  ()  {
  return (
      <>
          
        <Grid container spacing={2}>



        <Grid item xs={12} md={12}>
        <p className='subTitle'>
            FAMOUS WORKOUTS
        </p>
        </Grid>

  {items.map((star,index)=>{  
          return(
        <Grid item xs={6} md={2} key={index}>
 <Card sx={{ maxWidth: 345 ,boxShadow: "none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={star.img}
          alt="green iguana"
        />
     <CardContent>
          <Typography gutterBottom  component="div" className='subTitle'>
            {star.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         
   </Grid>
)

  })}
      
 
  </Grid>
  </>
  )
}
const items = [
    {
      img: '/stars/John_Cena.jpg',
      title: 'John Cena',
    },
    {
      img: '/stars/Larry-Wheels.jpeg',
      title: 'Larry Wheels',
    },
    {
        img: '/stars/panda.jpeg',
        title: 'Panda',
      },
      {
        img: '/stars/Roman_Reigns.jpg',
        title: 'Roman Reigns',
      },
      {
        img: '/stars/the_rock.jpeg',
        title: 'The Rock',
      },
];
