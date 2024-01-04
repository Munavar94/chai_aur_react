import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    // console.log('value added', Math.random())
    setCount((prev) => (
      prev + 1
    ));   // 1

    setCount(prev => prev + 1); // 2
    setCount(prev => prev + 1); // 3
    setCount(prev => prev + 1); // 4
  }

  const handleRemove = () => {    
    setCount((prev) => (
      prev > 0 ? prev - 1 : 0
    ))
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={handleAdd}>Add</button>
      <br />
      <button onClick={handleRemove}>Remove</button>
    </>
  )
}

export default App
