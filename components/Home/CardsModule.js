import React from 'react'
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function CardsModule  ()  {
  return (
      <>
          
        <Grid container spacing={2} sx={{marginTop:'2%'}}>



        <Grid item xs={12} md={12}>
        <p className='subTitle2'>
            FAMOUS WORKOUTS
        </p>
        </Grid>

  {items.map((star,index)=>{  
          return(
        <Grid item xs={6} md={2} key={index}>
          <Link   href={star.link} color="inherit" underline="hover"  > 
 <Card sx={{ maxWidth: 345 ,boxShadow: "none"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={star.img}
          alt={star.title}
        />
     <CardContent>
          <Typography gutterBottom  component="div" className='h1'>
            {star.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
         </Link>
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
      link:'/stars/john'
    },
    {
      img: '/stars/Larry-Wheels.jpeg',
      title: 'Larry Wheels',
      link:'/stars/larry'
    },
    {
        img: '/stars/panda.jpeg',
        title: 'Panda',
        link:'/stars/simeon'
      },
      {
        img: '/stars/Roman_Reigns.jpg',
        title: 'Roman Reigns',
        link:'/stars/roman'
      },
      {
        img: '/stars/the_rock.jpeg',
        title: 'The Rock',
        link:'/stars/therock'
      },
      {
        img: '/stars/Brandon_Hendrickson.jpeg',
        title: 'Brandon Hendrickson',
        link:'/stars/brandon'
      },

];
