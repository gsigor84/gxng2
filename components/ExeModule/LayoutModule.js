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
        Hammer :'',
        WideGrip:'',
        StraightArm:'',
        ReverseCloseGrip:'',
        VBar:'',
        ParallelGrip:''
    })
    const [values2, setValues2]=useState({
        BarbellRow:'',
        ReverseGripBarbellRow:'',
        DumbbellRow:'',
        ProneIncline:'',
        TBarRow:'',
  
    })
    const [values3, setValues3]=useState({
        ReverseHyper:'',
        ExtensionsonBench:'',
        TwistingHyper:'',
        ReverseHyperBench:'',
        InclineReverseHyper:'',
    })

    const [final]=useState({pull: {},rows:{},extensions:{}})

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

    function handleInputChange3(e){
        const {name,value} = e.target
        setValues3({...values3,

            [name]
                :
            value

        } )}

        const handleData = async (e)=> {
            e.preventDefault()
            final.pull = values
            final.rows=values2
            final.extensions=values3
            const hasEmptyFiled = Object.values(values).every((element)=>element ==='')
            const hasEmptyFiled2 = Object.values(values2).every((element)=>element ==='')
            const hasEmptyFiled3 = Object.values(values2).every((element)=>element ==='')

            if(hasEmptyFiled && hasEmptyFiled2 && hasEmptyFiled3 ){
                toast.error('Please Select a field')
            }
            console.log(final)
            const res = await fetch(`${API_URL}/backs`, {
                method:'POST',
    
                    headers:
                        {'Content-Type': 'application/json'},
                    body: JSON.stringify(final)
            })

            const dataResponse = await res.json()
        console.log(dataResponse)
        router.push(`/dashboard/back`)
        }


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
       Back
         </p>
         </Grid>


         <Grid item xs={12} md={4} >
     <p  className='subTitle'>
        Pull
         </p>
        
 <p>
                            <input  type="checkbox"  name={'Hammer'} value={'Hammer Strength Reverse-Grip Lat Pulldown'} onChange={handleInputChange}  />
                            <label className='p1' >
                            Hammer Strength Reverse-Grip Lat Pulldown
                            </label>
                          </p>

                          <p>
                            <input  type="checkbox" name={'WideGrip'} value={'Wide-Grip Lat Pulldown'} onChange={handleInputChange} />
                            <label className='p1'>
                            Wide-Grip Lat Pulldown
                            </label>
                            
                            </p>
                            <p>

                            <input type="checkbox"  name={'StraightArm'} value={'Straight-Arm Pulldown'} onChange={handleInputChange} />
                            <label className='p1'>
                            Straight-Arm Pulldown
                            </label>
                            </p>
                            
                            
                            <p>
                            <input  type="checkbox" name={'ReverseCloseGrip'} value={'Reverse Close-Grip Lat Pull-Down '} onChange={handleInputChange} />
                            <label className='p1'>
                            Reverse Close-Grip Lat Pull-Down 
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'VBar'} value={'V-Bar Pull-Down'} onChange={handleInputChange}/>
                            <label className='p1'>
                            V-Bar Pull-Down
                            </label>
                            </p>

                            <p>
                            <input  type="checkbox" name={'ParallelGrip'} value={'Parallel-Grip Lat Pull-Down'} onChange={handleInputChange}/>
                            <label className='p1'>
                            Parallel-Grip Lat Pull-Down
                            </label>
                            </p>

                            
                            
                            
    </Grid>
          <Grid item xs={12} md={4} >
          <p  className='subTitle'>
        Row
         </p>


         <p>
         <input type="checkbox" name={'BarbellRow'} value={'Barbell Row'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Barbell Row
                            </label>
                            </p>
<p>

                            <input type="checkbox" name={'ReverseGripBarbellRow'} value={'Reverse-Grip Barbell Row'} onChange={handleInputChange2}  />
                            <label className='p1'>
                            Reverse-Grip Barbell Row
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'DumbbellRow'} value={'Dumbbell Row'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Dumbbell Row
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'ProneIncline'} value={'Prone Incline Bench Row'} onChange={handleInputChange2} />
                            <label className='p1' >
                            Prone Incline Bench Row
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'TBarRow'} value={'T-Bar Row'} onChange={handleInputChange2} />
                            <label className='p1' >
                            T-Bar Row
                            </label>
                            </p>
                           
    </Grid>
    <Grid item xs={12} md={4} >
    <p  className='subTitle'>
    Extension
         </p>

         <p>
         <input  type="checkbox" name={'ReverseHyper'} value={'Reverse Hyperextension'} onChange={handleInputChange3} />
                            <label className='p1' >
                            Reverse Hyperextension
                            </label>
                            </p>
                            <p>
                            <input  type="checkbox" name={'ExtensionsonBench'} value={'Back Extensions on Bench'} onChange={handleInputChange3} />
                            <label className='p1' >
                            Back Extensions on Bench
                            </label>
                            </p>
                            <p>
                            <input className={styles.tick} type="checkbox" name={'TwistingHyper'} value={'Twisting Hyperextension'} onChange={handleInputChange3}  />
                            <label className='p1'>
                            Twisting Hyperextension
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'ReverseHyperBench'} value={'Reverse Hyper on  Flat Bench'} onChange={handleInputChange3}  />
                            <label className='p1'>
                            Reverse Hyper on  Flat Bench
                            </label>
                            </p>

                            <p>
                            <input type="checkbox" name={'InclineReverseHyper'} value={'Incline reverse Hyperextension'} onChange={handleInputChange3}   />
                            <label className='p1'>
                            Incline reverse Hyperextension
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