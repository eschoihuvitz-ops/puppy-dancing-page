import { useState } from 'react'
import puppyImage from '../assets/images/puppy.svg'
import './DancingPuppy.css'

function DancingPuppy() {
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="dancing-puppy-wrapper">
      <div className={`puppy-container ${isPlaying ? 'dancing' : 'paused'}`}>
        <img src={puppyImage} alt="Dancing Puppy" className="puppy" />
      </div>
      <button onClick={toggleAnimation} className="control-button">
        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
      </button>
    </div>
  )
}

export default DancingPuppy
