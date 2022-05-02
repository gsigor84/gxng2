import React from 'react'
import BackLayout from '../../components/DashModule/BackModule'
import {API_URL} from '@/config/index'



const back = ({backs}) => {




  return (
      <>
   
   <BackLayout 
   
   backs={backs}


   />
   </>
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/backs`)
    const backs = await res1.json()
    

console.log(backs)
    return{
        props: {backs:backs.slice(-1)}     
     
        
     
    }

}

export default back