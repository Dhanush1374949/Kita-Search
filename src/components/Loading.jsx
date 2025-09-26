import React from 'react'

import { RotatingLines } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className=' flex justify-center items-center'>
        <RotatingLines type="Puff" color='#00BFFF' height={50} width={50}/>
        </div>
  )
}
