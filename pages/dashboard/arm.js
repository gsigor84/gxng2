import React from 'react'
import ArmLayout from '../../components/DashModule/ArmModule'
import {API_URL} from '@/config/index'

const back = ({arms}) => {
  return (
   <ArmLayout 
   
   arms={arms}


   />
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/arms`)
    const arms = await res1.json()

    return{
        props: {arms:arms.slice(-1)}
       
     
        
     
    }

}

export default back