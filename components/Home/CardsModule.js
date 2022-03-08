import React from 'react'
import Image from 'next/image';
import Grid from '@mui/material/Grid';




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

          <Image
            src={star.img}
           width={200}
          height={150}
            loading="lazy"
        
          />
         
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
      title: 'Breakfast',
    },
    {
      img: '/stars/Larry-Wheels.jpeg',
      title: 'Burger',
    },
    {
        img: '/stars/panda.jpeg',
        title: 'Burger',
      },
      {
        img: '/stars/Roman_Reigns.jpg',
        title: 'Burger',
      },
      {
        img: '/stars/the_rock.jpeg',
        title: 'Burger',
      },
];
