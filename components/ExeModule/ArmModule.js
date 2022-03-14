import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../../styles/Button.module.css'
import {useState} from "react";
import {useRouter} from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import {API_URL} from '@/config/index'


const BackModule = () => {
    const router =useRouter()

    const [values, setValues]=useState({
        StandingDumbbell: '',
        InclineDumbbell: '',
        Chinup: '',
        RegularEZ: '',
        ConcentrationCurl: '',
        StandingCable: '',
        SmithMachine: '',

    })

    const [values2, setValues2]=useState({
        Skullcrusher:'',
        CloseGripBench:'',
        TricepsDip:'',
        TricepsMachine:'',
        DumbbellOverhead:'',
        CablePushDown:'',
        CloseGripPushUp:'',
        CableKickBack:'',
    })

    const [final]=useState({biceps: {},triceps:{}})

    const handleData = async (e)=> {
        e.preventDefault()
        final.biceps = values
        final.triceps=values2
        const hasEmptyFiled = Object.values(values).every((element)=>element ==='')
        const hasEmptyFiled2 = Object.values(values2).every((element)=>element ==='')
        if(hasEmptyFiled && hasEmptyFiled2 ){
            toast.error('Please Select a field')
        }
        console.log(final)
        const res = await fetch(`${API_URL}/arms`, {
            method:'POST',

                headers:
                    {'Content-Type': 'application/json'},
                body: JSON.stringify(final)
        })
        router.push(`/dashboard/arm`)
        const dataResponse = await res.json()
        console.log(dataResponse)
       
     

    }


    function handleInputChange(e){
        const {name,value} = e.target
        setValues({...values,

            [name]
        :
            value

    } )}

    function handleInputChange2(e){
        const {name,value} = e.target
        setValues2({...values2,

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



         <Grid item xs={12} md={6} >
     <p  className='subTitle'>
     Biceps
         </p>
        
 <p>
                            <input  type="checkbox" name={'StandingDumbbell'} value={'Standing Dumbbell Curl'} onChange={handleInputChange}   />
                            <label className='p1' >
                            Standing Dumbbell Curl 
                            </label>
                          </p>

                          <p>
                            <input  type="checkbox"  name={'InclineDumbbell'} value={'Incline Dumbbell Curl'} onChange={handleInputChange}  />
                            <label className='p1'>
                            Incline Dumbbell Curl
                            </label>
                            
                            </p>
                            <p>

                            <input type="checkbox"  name={'Chinup'} value={'Chin-up'} onChange={handleInputChange} />
                            <label className='p1'>
                            Chin-up
                            </label>
                            </p>
                            
                            
                            <p>
                            <input  type="checkbox" name={'RegularEZ'} value={'Regular EZ Bar Curl'} onChange={handleInputChange} />
                            <label className='p1'>
                            Regular EZ Bar Curl
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'ConcentrationCurl'} value={'Concentration Curl'} onChange={handleInputChange} />
                            <label className='p1'>
                            Concentration Curl 
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'StandingCable'} value={'Standing Cable Curl'} onChange={handleInputChange} />
                            <label className='p1'>
                            Standing Cable Curl
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'SmithMachine'} value={'Smith-Machine Drag Curl'} onChange={handleInputChange} />
                            <label className='p1'>
                            Smith-Machine Drag Curl
                            </label>
                            </p>


                            
                            
                            
    </Grid>
          
    <Grid item xs={12} md={6} >
    <p  className='subTitle'>
    Triceps
         </p>

         <p>
         <input  type="checkbox" name={'Skullcrusher'} value={'Skullcrusher'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Skullcrusher
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'CloseGripBench'} value={'Close-Grip Bench Press'} onChange={handleInputChange2}  />
                            <label className='p1' >
                            Close-Grip Bench Press
                            </label>
                            </p>
                            <p>
                            <input className={styles.tick} type="checkbox" name={'TricepsDip'} value={'Triceps Dip'} onChange={handleInputChange2}  />
                            <label className='p1'>
                            Triceps Dip 
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'TricepsMachine'} value={'Triceps Machine Dip'} onChange={handleInputChange2} />
                            <label className='p1'>
                            Triceps Machine Dip 
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'DumbbellOverhead'} value={'Dumbbell Overhead Triceps Extension'} onChange={handleInputChange2}   />
                            <label className='p1'>
                            Dumbbell Overhead Triceps Extension
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'CablePushDown'} value={'Cable Push-Down'} onChange={handleInputChange2}   />
                            <label className='p1'>
                            Cable Push-Down
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'CloseGripPushUp'} value={'Close-Grip Push-Up'} onChange={handleInputChange2}  />
                            <label className='p1'>
                            Close-Grip Push-Up
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'CableKickBack'} value={'Single-Arm Cable Kick-Back'} onChange={handleInputChange2}   />
                            <label className='p1'>
                            Single-Arm Cable Kick-Back
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


export default BackModule