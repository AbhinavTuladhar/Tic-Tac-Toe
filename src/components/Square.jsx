import React from 'react'

const Square = ( { id, content, onClick }) => {
  return (
    <button id={id} className='border-2 border-slate-200 h-24 w-24 flex justify-center items-center text-6xl font-bold' onClick={onClick} disabled={content !== null}>
      {content}
    </button>
  )
}

export default Square