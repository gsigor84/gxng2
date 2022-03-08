import React from 'react'
import DashLayout from '../../components/DashModule/LayoutModule'
import {API_URL} from '@/config/index'

const index = ({exes}) => {
  return (
   <DashLayout exes={exes}/>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/chests`)
    const exes = await res.json()

    console.log(exes)

    return{
        props: {exes:exes.slice(-1)}
     
    }

}

export default index