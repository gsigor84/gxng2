import React from 'react'
import {API_URL} from '@/config/index'

import Exe from 'components/ExeModule/LayoutModule'

const chest = ({chests}) => {
  return (

<>
<Exe chests={chests}  />
</>
  )
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/chests`)
    const chests = await res.json()

  

    return{
        props: {chests:chests.slice(-1)},
     
     
    }

}

export default chest