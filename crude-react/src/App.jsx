import { useState } from 'react'
import TestComponent from './components/TestComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="master">
        <TestComponent />
      </div>
    </>
  )
}

export default App

