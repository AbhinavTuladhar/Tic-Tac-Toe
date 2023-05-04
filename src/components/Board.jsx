import React from 'react'
import Square from './Square'
import GameContext from '../context/GameContext'

const Board = ({ gameState }) => {
    const { handleClick } = React.useContext(GameContext)
    const squares = gameState.map((value, id) => {
        return <Square content={value} id={id} onClick={() => handleClick(id)} />
    })

    return (
        <div className='grid grid-cols-3 grid-rows-3 gap-y-0 gap-x-0 w-72 mx-auto'>
            {squares}
        </div>
    )
}

export default Board;