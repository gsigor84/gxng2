import React from 'react'
import LegLayout from '../../components/DashModule/LegModule'
import {API_URL} from '@/config/index'

const chest = ({legs}) => {
  return (
   <LegLayout 
   
   legs={legs}


   />
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/legs`)
    const legs = await res1.json()


    return{
        props: {legs:legs.slice(-1)}
       
     
        
     
    }

}

export default chest