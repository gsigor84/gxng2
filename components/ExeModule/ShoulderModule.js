import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../../styles/Button.module.css'
import {useState} from "react";
import {useRouter} from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import {API_URL} from '@/config/index'


const LayoutModule = () => {

    const router =useRouter()

    const [values, setValues]=useState({
        ArnoldPresses: '',
        FrontArmRaises:'',
        MilitaryPress:'',
        MilitaryPressDumbbell:'',
        UprightRows:'',
        UprightRowsCable:'',

    })

    const [values2, setValues2]=useState({
        ArmCable:'',
        BentArm:'',
        BarbellOverhead:'',
        SwitchSide:'',

    })
    
    const [values3, setValues3]=useState({
        SingleArmBent:'',
        CableMachine:'',
        RearDeltoid:'',
        DumbbellIncline:'',
        DumbbellBentOver:'',
    })

    const [final]=useState({anterior:{},medial:{},rear:{}})

    const handleData = async (e)=> {
        e.preventDefault()
        final.anterior = values
        final.medial=values2
        final.rear=values3
        const hasEmptyFiled = Object.values(values).every((element)=>element ==='')
        const hasEmptyFiled2 = Object.values(values2).every((element)=>element ==='')
        const hasEmptyFiled3 = Object.values(values2).every((element)=>element ==='')
        if(hasEmptyFiled && hasEmptyFiled2 && hasEmptyFiled3 ){
            toast.error('Please Select a field')
        }
        console.log(final)
        const res = await fetch(`${API_URL}/shoulders`, {
            method:'POST',

                headers:
                    {'Content-Type': 'application/json'},
                body: JSON.stringify(final)
        })
        router.push(`/dashboard/shoulder`)
        const dataResponse = await res.json()
        console.log(dataResponse)
       
        // router.push(`/exercise`)

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
       Shoulder
         </p>
         </Grid>


         <Grid item xs={12} md={4} >
     <p  className='subTitle'>
     Anterior
         </p>
        
 <p>
                            <input  type="checkbox"  name={'ArnoldPresses'} value={'Arnold Presses (Dumbbell)'} onChange={handleInputChange} />
                            <label className='p1' >
                            Arnold Presses (Dumbbell)
                            </label>
                          </p>

                          <p>
                            <input  type="checkbox"  name={'FrontArmRaises'} value={'Front Arm Raises (Dumbbell)'} onChange={handleInputChange}  />
                            <label className='p1'>
                            Front Arm Raises (Dumbbell)
                            </label>
                            
                            </p>
                            <p>

                            <input type="checkbox" name={'MilitaryPressDumbbell'} value={'Military Press (Dumbbell)'} onChange={handleInputChange} />
                            <label className='p1'>
                            Military Press (Dumbbell)
                            </label>
                            </p>
                            
                            
                            <p>
                            <input  type="checkbox" name={'UprightRows'} value={'Upright Rows (Barbell)'} onChange={handleInputChange} />
                            <label className='p1'>
                            Upright Rows (Barbell)
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" className={styles.tick}  name={'UprightRowsCable'} value={'Upright Rows (Cable)'} onChange={handleInputChange}/>
                            <label className='p1'>
                            Upright Rows (Cable)
                            </label>
                            </p>
                            
                            
    </Grid>
          <Grid item xs={12} md={4} >
          <p  className='subTitle'>
          Medial
         </p>


         <p>
         <input type="checkbox" name={'ArmCable'} value={'Arm Cable Side Raise'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Arm Cable Side Raise
                            </label>
                            </p>
<p>

                            <input type="checkbox"  name={'BentArm'} value={'Bent Arm Dumbbell Lateral Raise'} onChange={handleInputChange2}  />
                            <label className='p1'>
                            Bent Arm Dumbbell Lateral Raise
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'BarbellOverhead'} value={'Barbell Overhead Press'} onChange={handleInputChange2}  />
                            <label className='p1' >
                            Barbell Overhead Press
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'SwitchSide'} value={'Switch Side Pulses'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Switch Side Pulses
                            </label>
                            </p>

                           
    </Grid>
    <Grid item xs={12} md={4} >
    <p  className='subTitle'>
    Rear
         </p>

         <p>
         <input  type="checkbox" name={'SingleArmBent'} value={'Single Arm Bent Over Rows'} onChange={handleInputChange3} />
                            <label className='p1' >
                            Single Arm Bent Over Rows
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'CableMachine'} value={'Cable Machine High Pull with Ropess'} onChange={handleInputChange3} />
                            <label className='p1' >
                            Cable Machine High Pull with Ropes
                            </label>
                            </p>
                            <p>
                            <input className={styles.tick} type="checkbox" name={'RearDeltoid'} value={'Rear Deltoid Machine'} onChange={handleInputChange3} />
                            <label className='p1'>
                            Rear Deltoid Machine
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'DumbbellIncline'} value={'Dumbbell Incline Y Raise'} onChange={handleInputChange3}  />
                            <label className='p1'>
                            Dumbbell Incline Y Raise
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'DumbbellBentOver'} value={'Dumbbell Bent Over Rear Delt Fly'} onChange={handleInputChange3}   />
                            <label className='p1'>
                            Dumbbell Bent Over Rear Delt Fly
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


export default LayoutModule