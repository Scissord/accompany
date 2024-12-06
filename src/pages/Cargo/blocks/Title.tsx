import React from 'react'

type Props = {}

const Title = (props: Props) => {
  return (
    <div className='h-[40vh] lg:min-h-[50vh] bg-dbg text-white'>
      <div className='container mx-auto flex items-center justify-center h-full px-6 lg:px-0'>
        <h1 className='font-bold text-3xl'>
          Карго
        </h1>
      </div>
    </div>
  )
}

export default Title