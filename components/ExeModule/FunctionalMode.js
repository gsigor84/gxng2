import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../../styles/Button.module.css'
import {useState} from "react";
import {useRouter} from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import {API_URL} from '@/config/index'


const FunctionalModule = () => {

    const router =useRouter()

    const [values, setValues]=useState({
        FRONTSQUAT:'',
        RENEGADEROW: '',
        DUMBBELLCHOP: '',
        INVERTEDROW: '',
        KETTLEBELLSWING: '',
        UPDOWNPLANK: '',
        CROSSBODY: '',
        STEPUPTOOVERHEAD: '',
        LUNGEOVERHEAD: '',
        FEETELEVATED: '',
        CLOSEGRIP: '',
        BURPEEBROAD: '',
        BARBELLROLLOUT: '',

    })

    const handleData = async (e)=> {
        e.preventDefault()
        const hasEmptyFiled = Object.values(values).every((element)=>element ==='')
        if(hasEmptyFiled ){
            toast.error('Please Select a field')
        }
        console.log(values)
        const res = await fetch(`${API_URL}/functionals`, {
            method:'POST',

                headers:
                    {'Content-Type': 'application/json'},
                body: JSON.stringify(values)
        })
        router.push(`/dashboard/functional`)
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
       Functional
         </p>
         </Grid>


         <Grid item xs={12} md={12} >

 <p>
                            <input  type="checkbox"  name={'FRONTSQUAT'} value={'FRONT SQUAT TO PRESS'} onChange={handleInputChange}  />
                            <label className='p1' >
                            FRONT SQUAT TO PRESS
                            </label>
                          </p>

                          <p>
                            <input  type="checkbox" name={'RENEGADEROW'} value={'RENEGADE ROW'} onChange={handleInputChange} />
                            <label className='p1'>
                            RENEGADE ROW
                            </label>
                            
                            </p>
                            <p>

                            <input type="checkbox"  name={'DUMBBELLCHOP'} value={'DUMBBELL CHOP'} onChange={handleInputChange}/>
                            <label className='p1'>
                            DUMBBELL CHOP
                            </label>
                            </p>
                            
                            
                            <p>
                            <input  type="checkbox" name={'INVERTEDROW'} value={'INVERTED ROW'} onChange={handleInputChange} />
                            <label className='p1'>
                            INVERTED ROW 
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'KETTLEBELLSWING'} value={'KETTLEBELL SWING'} onChange={handleInputChange} />
                            <label className='p1'>
                            KETTLEBELL SWING
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'UPDOWNPLANK'} value={'UP-DOWN PLANK PUSHUP'} onChange={handleInputChange} />
                            <label className='p1'>
                            UP-DOWN PLANK PUSHUP
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'CROSSBODY'} value={'CROSS-BODY CLEAN AND PRESS'} onChange={handleInputChange} />
                            <label className='p1'>
                            CROSS-BODY CLEAN AND PRESS
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'STEPUPTOOVERHEAD'} value={'STEPUPTOOVERHEAD'} onChange={handleInputChange} />
                            <label className='p1'>
                            STEP-UP TO OVERHEAD PRESS
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'LUNGEOVERHEAD'} value={'LUNGE W/ OVERHEAD PRESS'} onChange={handleInputChange} onChange={handleInputChange} />
                            <label className='p1'>
                            LUNGE W/ OVERHEAD PRESS
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'FEETELEVATED'} value={'FEET-ELEVATED PUSHUPS'} onChange={handleInputChange} />
                            <label className='p1'>
                            FEET-ELEVATED PUSHUP
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'CLOSEGRIP'} value={'CLOSE-GRIP CHINUP'} onChange={handleInputChange}/>
                            <label className='p1'>
                            CLOSE-GRIP CHINUP
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'BURPEEBROAD'} value={'BURPEE TO BROAD JUMP'} onChange={handleInputChange}/>
                            <label className='p1'>
                            BURPEE TO BROAD JUMP
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'BARBELLROLLOUT'} value={'BARBELL ROLLOUT'} onChange={handleInputChange}/>
                            <label className='p1'>
                            BARBELL ROLLOUT
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


export default FunctionalModule