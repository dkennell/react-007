import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hamburgerMenuIcon from './assets/hamburger-menu.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <div class="flex justify-end m-5">
	  	<img class="w-13" src={hamburgerMenuIcon} />
	  </div>
    </>
  )
}

export default App
