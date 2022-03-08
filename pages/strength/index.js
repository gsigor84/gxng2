import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const index = () => {
  
  return (

    <Grid container spacing={2} sx={{margin:'2%'}}>

{items.map((muscle,index)=>{  
          return(

<Grid item xs={12} md={4} key={index} > 
  <Card sx={{ maxWidth: 345, backgroundColor:'black' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={muscle.img}
        alt="green iguana"
      className='cardImg'
      />
      <CardContent> <Link underline="hover"  href={muscle.link} style={{ textDecoration: 'none' }} > 
      <p  style={{fontSize:'20px',color:'white',fontFamily: 'IntegralCF-Bold'}}>
        
         {muscle.title}
         
       </p></Link>
      </CardContent>
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
      title: 'chest',
      link:'/strength/chest'
    },
    {
      img: '/stars/the_rock.jpeg',
      title: 'back',
    },
    {
        img: '/stars/panda.jpeg',
        title: 'shoulder',
      },
      {
        img: '/stars/John_Cena.jpg',
        title: 'legs',
      },
      {
        img: '/stars/Roman_Reigns.jpg',
        title: 'arms',
      },
];


export default index