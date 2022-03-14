import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../../styles/Button.module.css'
import {useState} from "react";
import {useRouter} from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import {API_URL} from '@/config/index'


const LegModule = () => {

    const router =useRouter()
    
    const [values, setValues]=useState({
        Frontsquat:'',
        Bulgariansplit:'',
        Legpress:'',
        Legextension:'',

    })
    const [values2, setValues2]=useState({
        Deadlift:'',
        RomanianDeadlift:'',
        LyingLegCurl:'',
        RazorCurl:'',
        BackExtension:'',
    })
    const [values3, setValues3]=useState({
        SeatedCalfRaise:'',
        CalfRaiseMachine:'',
        DumbbellCalfRaise:'',
        FarmersWalk:'',
    })


    const [final]=useState({quadriceps:{},hamstring:{},calves:{}})
    
    const handleData = async (e)=> {
        e.preventDefault()
        final.quadriceps = values
        final.hamstring=values2
        final.calves=values3
        const hasEmptyFiled = Object.values(values).every((element)=>element ==='')
        const hasEmptyFiled2 = Object.values(values2).every((element)=>element ==='')
        const hasEmptyFiled3 = Object.values(values2).every((element)=>element ==='')
        if(hasEmptyFiled && hasEmptyFiled2 && hasEmptyFiled3 ){
            toast.error('Please Select a field')
        }
        console.log(final)
        const res = await fetch(`${API_URL}/legs`, {
            method:'POST',

                headers:
                    {'Content-Type': 'application/json'},
                body: JSON.stringify(final)
        })
        router.push(`/dashboard/leg`)
        const dataResponse = await res.json()
        console.log(dataResponse)
    }

    function handleInputChange(e) {

        const {name,value} = e.target
        setValues({...values,

            [name]
        :
            value

    } )}

    function handleInputChange2(e) {

        const {name,value} = e.target
        setValues2({...values2,

            [name]
                :
            value

        } )}
    function handleInputChange3(e) {

        const {name,value} = e.target
        setValues3({...values3,

            [name]
                :
            value

        } )}


  return (
    <>
    <ToastContainer/>
    <Box sx={{ width: '100%',padding:'5%'}}>
    <Grid container
    direction="row"
  justifyContent="flex-start"
  alignItems="center"
    sx={{marginRight:'2%',padding:'2%'}}>
     

                  <form onSubmit={handleData} >
                  <Grid container >
    <Grid item xs={12} md={12} >
     <p className='subTitle'>
       Leg
         </p>
         </Grid>

       <Grid item xs={12} md={4} >
     <p  className='subTitle'>
     Quadriceps
         </p>
        
       
 <p>
                            <input  type="checkbox"  name={'Frontsquat'} value={'Front squat'} onChange={handleInputChange} />
                            <label className='p1' >
                            Front squat
                            </label>
                          </p>

                          <p>
                            <input  type="checkbox"  name={'Bulgariansplit'} value={'Bulgarian split squat'} onChange={handleInputChange} />
                            <label className='p1'>
                            Bulgarian split squat
                            </label>
                            
                            </p>
                            <p>

                            <input type="checkbox"  name={'Legpress'} value={'Leg press'} onChange={handleInputChange} />
                            <label className='p1'>
                            Leg press
                            </label>
                            </p>
                            
                            
                            <p>
                            <input  type="checkbox" name={'Legextension'} value={'Leg extension'} onChange={handleInputChange}  />
                            <label className='p1'>
                            Leg extension
                            </label>
                            </p>                            
                            
                            
    </Grid>
          <Grid item xs={12} md={4} >
          <p  className='subTitle'>
          Hamstring
         </p>


         <p>
         <input type="checkbox" name={'Deadlift'} value={'Deadlift'} onChange={handleInputChange2}/>
                            <label className='p1' >
                            Deadlift
                            </label>
                            </p>
<p>

                            <input type="checkbox" name={'RomanianDeadlift'} value={'Romanian Deadlift'} onChange={handleInputChange2}   />
                            <label className='p1'>
                            Romanian Deadlift
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'LyingLegCurl'} value={'Lying Leg Curl'} onChange={handleInputChange2}  />
                            <label className='p1' >
                            Lying Leg Curl
                            </label>
                            </p>

                            <p>
                            <input type="checkbox"  name={'RazorCurl'} value={'Razor Curl'} onChange={handleInputChange2}  />
                            <label className='p1' >
                            Razor Curl
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'BackExtension'} value={'BackExtension'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Back Extension
                            </label>
                            </p>
                           
    </Grid>
    <Grid item xs={12} md={4} >
    <p  className='subTitle'>
    Calves
         </p>

         <p>
         <input  type="checkbox" name={'SeatedCalfRaise'} value={'Seated Calf Raise'} onChange={handleInputChange3} />
                            <label className='p1' >
                            Seated Calf Raise
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox"name={'CalfRaiseMachine'} value={'Seated Calf Raise Machine'} onChange={handleInputChange3} />
                            <label className='p1' >
                            Seated Calf Raise Machine
                            </label>
                            </p>
                            <p>
                            <input className={styles.tick} type="checkbox" name={'DumbbellCalfRaise'} value={'Seated Dumbbell Calf Raise'} onChange={handleInputChange3}  />
                            <label className='p1'>
                            Seated Dumbbell Calf Raise
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'FarmersWalk'} value={'Farmer’s Walk'} onChange={handleInputChange3}  />
                            <label className='p1'>
                            Farmer’s Walk
                            </label>
                            </p>


                         
    </Grid>
    
          <Grid   container   direction="row"   justifyContent="flex-end"   alignItems="center" sx={{marginTop:'2%',marginBottom:'30%'}}>
          <button className={styles.button59}>Submit</button>

</Grid>

    </Grid>
    </form>

    
    </Grid>
    </Box>
    </>

  )
}


export default LegModule