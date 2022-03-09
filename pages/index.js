import HomeP from './main/home'
import Grid from '@mui/material/Grid';
import CardsModule from '../components/Home/CardsModule';

export default function Home() {

  return (
   

<Grid container sx={{marginBottom:'30%'}}>

<Grid item xs={12} md={12} >
<HomeP/>
</Grid>
<Grid item xs={12} md={12} >
<CardsModule/>
</Grid>


</Grid>

 
  )
}
