import React from 'react'
import ChestLayout from '../../components/DashModule/ChestModule'
import {API_URL} from '@/config/index'

const chest = ({chests}) => {
  return (
   <ChestLayout 
   
   chests={chests}


   />
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/chests`)
    const chests = await res1.json()


    return{
        props: {chests:chests.slice(-1)}
       
     
        
     
    }

}

export default chest