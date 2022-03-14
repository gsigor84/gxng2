import React from 'react'
import FunctionalLayout from '../../components/DashModule/FunctionalsModule'
import {API_URL} from '@/config/index'

const functionals = ({functionals}) => {
  return (
   <FunctionalLayout 
   
   functionals={functionals}


   />
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/functionals`)
    const functionals = await res1.json()


    return{
        props: {functionals:functionals.slice(-1)}
       
     
        
     
    }

}

export default functionals