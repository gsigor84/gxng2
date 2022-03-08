import React from 'react'
import {API_URL} from '@/config/index'


const chest = ({exes}) => {
  return (

<>
<Exe exes={exes}  />
</>
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

export default chest