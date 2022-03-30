import React, { useState } from 'react'

const App = () => {
  const [count, countUp] = useState(0)
  return (
    <div className="App">
      {count}
      <button onClick={countUp}></button>
    </div>
  )
}

export default App
