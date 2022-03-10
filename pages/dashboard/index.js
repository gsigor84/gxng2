import React from 'react'
import DashLayout from '../../components/DashModule/LayoutModule'
import {API_URL} from '@/config/index'

const index = ({chests,backs}) => {
  return (
   <DashLayout 
   
   chests={chests}
   backs={backs}

   />
  )
}

export async function getServerSideProps() {
    const res1 = await fetch(`${API_URL}/chests`)
    const chests = await res1.json()

    const res2 = await fetch(`${API_URL}/backs`)
    const backs = await res2.json()

    console.log(backs)

    return{
        props: {chests:chests.slice(-1) , 
          backs:backs.slice(-1)  },
        
     
    }

}

export default index