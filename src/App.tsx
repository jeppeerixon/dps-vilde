import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Start from './components/Start'
import dpslogo from './assets/dps_logo.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  const [gameStart, setGameStart] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)

  function handleStartClick() {
    setGameStart(true)
  }

  return (
    <>
      <header>
        <img src={dpslogo} className='logo'></img>
        <div>
          <h1>DPS</h1>
          <h2>Vem blir vilde?</h2>
        </div>
        
      </header>
      <main>
        {gameStart ? <Quiz /> : <Start handleStartClick={handleStartClick} />}
        {gameOver ? <Result /> : null}
      </main>
      {gameStart ? null : 
      <footer>
        Made by <a href='https://github.com/jeppeerixon'> Jeppe Erixon </a> <GitHubIcon />
      </footer>
      }      
    </>
  )
}

export default App
