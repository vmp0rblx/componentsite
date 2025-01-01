import { useState } from 'react'
import reactLogo from './assets/react.svg'
import componentLogo from './assets/component.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://discord.gg/24czpdUy5q" target="_blank">
          <img src={componentLogo} className="logo" alt="Component" />
        </a>
      </div>
      <h1>COMPONENT</h1>
      <div className="card">
        <button onClick={() => (window.location.href = 'https://discord.gg/24czpdUy5q')}>
          Our Discord
        </button>
        <p>
          Protection you can trust.
        </p>
      </div>
      <p className="read-the-docs">
        Join our DISCORD above to get started.
      </p>
    </>
  )
}

export default App
