import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import styles from '../../styles/Button.module.css'
import {useState} from "react";
import {useRouter} from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import {API_URL} from '@/config/index'


const LayoutModule = () => {

const router =useRouter()

const [values, setValues]=useState({
 bench: '',
        machine: '',
        fly: '',
        pushups: '',
})
const [values2, setValues2]=useState({
    bench: '',
    machine: '',
    fly: '',
    pushups: '',
})
const [values3, setValues3]=useState({
    bench: '',
    machine: '',
    fly: '',
    pushups: '',
})


const [final]=useState({upper: {},middle:{},lower:{}})


const handleData = async (e)=> {
    e.preventDefault()
    final.upper = values
    final.middle=values2
    final.lower=values3
    const hasEmptyFiled = Object.values(values).every((element)=>element ==='')
    const hasEmptyFiled2 = Object.values(values2).every((element)=>element ==='')
    const hasEmptyFiled3 = Object.values(values2).every((element)=>element ==='')
    if(hasEmptyFiled && hasEmptyFiled2 && hasEmptyFiled3 ){
        toast.error('Please Select a field')
    }

    console.log(final)
    const res = await fetch(`${API_URL}/chests`, {
        method:'POST',

            headers:
                {'Content-Type': 'application/json'},
            body: JSON.stringify(final)
    })

    const dataResponse = await res.json()
    console.log(dataResponse)
    router.push(`/dashboard`)



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
    <Grid container
    direction="row"
  justifyContent="flex-start"
  alignItems="center"
    sx={{marginRight:'2%',padding:'2%'}}>
     

                  <form onSubmit={handleData} >
                  <Grid container >
    <Grid item xs={12} md={12} >
     <p className='subTitle'>
       CHEST
         </p>
         </Grid>


         <Grid item xs={12} md={4} >
     <p  className='subTitle'>
        Upper Section
         </p>
        
 <p>
                            <input  type="checkbox" name={'bench'} value={'Incline Bench Press (Barbell)'} onChange={handleInputChange} />
                            <label className='p1' >
                               Incline Bench Press (Barbell)
                            </label>
                          </p>

                          <p>
                            <input  type="checkbox" name={'machine'}  value={'Machine chest Press'}  onChange={handleInputChange}  />
                            <label className='p1'>
                                Machine chest Press
                            </label>
                            
                            </p>
                            <p>

                            <input type="checkbox" name={'fly'}  value={'Low Cable Fly'} onChange={handleInputChange}  />
                            <label className='p1'>
                                Low Cable Fly
                            </label>
                            </p>
                            <p>


                            <input  type="checkbox" name={'pushups'}  value={'Decline Push Ups'}  onChange={handleInputChange} />
                            <label className='p1'>
                                Decline Push Ups
                            </label>
                            </p>
                            
    </Grid>
          <Grid item xs={12} md={4} >
          <p  className='subTitle'>
        Middle Section
         </p>


         <p>
         <input type="checkbox" name={'bench'} value={'Bench Press (Barbell)'} onChange={handleInputChange2} />
                            <label className='p1' >
                               Bench Press (Barbell)
                            </label>
                            </p>
<p>

                            <input type="checkbox" name={'machine'}  value={'Machine Presses (Vertical)'}  onChange={handleInputChange2}  />
                            <label className='p1'>
                                Machine Presses (Vertical)
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'fly'}  value={'Straight-Armed Flys (Machine)'} onChange={handleInputChange2}  />
                            <label className='p1' >
                               Straight-Armed Flys (Machine)
                            </label>
                            </p>
                            <p>

                            <input type="checkbox" name={'pushups'}  value={'Push-Up (Flat Surface)'}  onChange={handleInputChange2} />
                            <label className='p1' >
                             Push-Up (Flat Surface)
                            </label>
                            </p>
                           
    </Grid>
    <Grid item xs={12} md={4} >
    <p  className='subTitle'>
        Lower Section
         </p>

         <p>
         <input  type="checkbox" name={'bench'} value={'Decline Bench Press (Barbell)'} onChange={handleInputChange3} />
                            <label className='p1' >
                              Decline Bench Press (Barbell)
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'machine'}  value={'Machine Presses'}  onChange={handleInputChange3}  />
                            <label className='p1' >
                                Machine Presses
                            </label>
                            </p>
                            <p>
                            <input className={styles.tick} type="checkbox" name={'fly'}  value={'Cable Crossover'} onChange={handleInputChange3}  />
                            <label className='p1'>
                               Cable Crossover
                            </label>
                          
                            </p>
                            <p>
                            <input type="checkbox" name={'pushups'}  value={'Incline Push up'}  onChange={handleInputChange3} />
                            <label className='p1'>
                             Incline Push up
                            </label>
                            </p>
                         
    </Grid>
    
          <Grid   container   direction="row"   justifyContent="flex-end"   alignItems="center" sx={{marginTop:'2%',marginBottom:'30%'}}>
          <button className={styles.button59}>Submit</button>

</Grid>

    </Grid>
    </form>

    
    </Grid>
    </>

  )
}


export default LayoutModule