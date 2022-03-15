import React from 'react'
import DashLayout from '../../components/DashModule/LayoutModule'
import {API_URL} from '@/config/index'
import functional from 'pages/functional'

const index = ({chests,arms,backs,legs,shoulders,functionals}) => {
  return (
   <DashLayout 
   
   chests={chests}
   arms={arms}
   backs={backs}
   legs={legs}
   shoulders={shoulders}
functionals={functionals}

   />
  )
}

export async function getStaticProps() {
    const res1 = await fetch(`${API_URL}/chests`)
    const res2 = await fetch(`${API_URL}/backs`)
    const res3 = await fetch(`${API_URL}/shoulders`)
    const res4 = await fetch(`${API_URL}/legs`)
    const res5 = await fetch(`${API_URL}/arms`)
    const res6 = await fetch(`${API_URL}/functionals`)

    const chests = await res1.json()
    const backs = await res2.json()
    const shoulders = await res3.json()
    const legs = await res4.json()
    const arms = await res5.json()
    const functionals = await res6.json()


    return{
        props: {
          
          chests:chests.slice(-1),
          backs:backs.slice(-1),
          shoulders:shoulders.slice(-1),
          legs:legs.slice(-1),
          arms:arms.slice(-1),
          functionals:functionals.slice(-1)
        
        }
       
     
        
     
    }

}

export default index