import React from 'react'
import DashLayout from '../../components/DashModule/LayoutModule'
import {API_URL} from '@/config/index'

const index = ({chests}) => {
  return (
   <DashLayout 
   
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

export default index