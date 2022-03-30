import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(previousCount => previousCount + 1)
  const decrement = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>リセット</button>
    </>
  )
}

export default App
