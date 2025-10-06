import React from 'react'

import { RotatingLines } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className=' flex justify-center items-center'>
        <RotatingLines type="Puff" color='green' height={30} width={30}/>
        </div>
  )
}
