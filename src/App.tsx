import componentLogo from './assets/logotrans.png'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://discord.gg/24czpdUy5q" target="_blank" rel="noopener noreferrer">
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
    </>
  )
}

export default App
