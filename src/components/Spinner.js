import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='spinner'></div>
        <p className='text-white font-bold text-lg'>Loading ....</p>
    </div>
  )
}

export default Spinner;