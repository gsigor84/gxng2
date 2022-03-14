import React from 'react'
import ShoulderLayout from '../../components/DashModule/ShoulderModule'
import {API_URL} from '@/config/index'

const chest = ({shoulders}) => {
  return (
   <ShoulderLayout 
   
   shoulders={shoulders}


   />
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/shoulders`)
    const shoulders = await res1.json()


    return{
        props: {shoulders:shoulders.slice(-1)}
       
     
        
     
    }

}

export default chest