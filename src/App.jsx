import './styles/global.css'
import './App.css'
import DancingPuppy from './components/DancingPuppy'

function App() {
  return (
    <div className="app">
      <h1>Jumping Puppy</h1>
      <div className="container">
        <DancingPuppy />
      </div>
    </div>
  )
}

export default App
