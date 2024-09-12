import React from 'react'
import './App.css'
import Board from './components/board/Board.jsx'
import Backlog from './pages/backlog/Backlog.jsx'

function App() {
  return (
    <div className='App'>
      <Board/>
      <Backlog />
    </div>
  )
}


export default App
