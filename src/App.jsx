import { React, useState, useEffect, useCallback } from 'react'
import Board from './components/Board';
import Header from './components/Header';
import GameContext from './context/GameContext';

const App = () => {
  const [gameState, setGameState] = useState(Array(9).fill(null))
  const [isXturn, setTurn] = useState(false)
  const X = 'X'
  const O = 'O'

  const checkWinner = useCallback((currentState) => {
    let winner = null
    const winningStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    winningStates.forEach(state => {
      const [a, b, c] = state
      if (currentState[a] !== null && currentState[a] === currentState[b] && currentState[b] === currentState[c]) {
        winner = currentState[a]
      }
    })
    // check if there is at least one null value.
    const checkDraw = currentState.some(value => value === null)
    if (!checkDraw && !winner)
      return "draw"
    return winner
  }, [])

  const handleClick = (id) => {
    setGameState(prevState => {
      const newState = [...prevState]
      newState[id] = isXturn ? X : O
      setTurn(prevTurn => !prevTurn)
      return newState
    })
  }

  useEffect(() => {
    const winner = checkWinner(gameState)
    let message
    if (winner) {
      if (winner === 'draw')
        message = 'It is a draw...'
      else
        message = `We have a winner: ${winner}`
      alert(message)
      setTimeout(() => {setGameState(() => Array(9).fill(null))}, 0)
      if (winner !== 'draw')
        setTimeout(() => {setTurn(false)}, 0)
    }
  }, [checkWinner, gameState])

  return (
    <div className='bg-black text-white h-screen'>
      <GameContext.Provider value={{handleClick}}>
        <Header currentTurn={isXturn ? 'X' : 'O'} />
        <Board gameState={gameState} />
      </GameContext.Provider>
    </div>
  )
}

export default App;