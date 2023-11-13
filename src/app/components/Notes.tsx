import React from 'react'
import Note from './Note'

const Notes = () => {
  return (
    <div className='flex flex-wrap justify-center max-w-6xl my-20 gap-10 items-center m-auto'>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
    </div>
  )
}

export default Notes