import React from 'react'

const Header = ({ currentTurn }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-4'>
      <div className='text-6xl'>
        TIC TAC TOE
      </div>
      <div className='text-xl'>
        Current turn: {currentTurn}
      </div>
    </div>
  )
}
export default Header;