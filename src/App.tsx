import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Start from './components/Start'
import dpslogo from './assets/dps_logo.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  const [homeScreen, setHomeScreen] = useState<boolean>(true)
  const [gameStart, setGameStart] = useState<boolean>(false)
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [percent, setPercent] =useState<number>(0)

  function handleStartClick() {
    setGameStart(true)
    setHomeScreen(false)
  }

  function handleGameOver(procent: number) {
    setPercent(procent)
    setGameStart(false)
    setGameOver(true)
  }

  function handleAgainClick() {
    setHomeScreen(true)
    setGameStart(false)
    setGameOver(false)
    setPercent(0)
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
        {homeScreen ? <Start handleStartClick={handleStartClick} /> : null}
        {gameStart ? <Quiz handleGameOver={handleGameOver} /> : null }
        {gameOver ? <Result handleAgainClick={handleAgainClick} value={percent}/> : null}
        {gameStart ? null : 
        <div className='footer'>
          Made by <a href='https://github.com/jeppeerixon'> Jeppe Erixon </a> <GitHubIcon />
        </div>
        }
      </main>      
    </>
  )
}

export default App
