import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'

const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state
  const reset = () => setState(props)


  useEffect(() => {
    console.log('useEffect')
  }, [])

  useEffect(() => {
    console.log('name に限定したコールバックですよ。')
  }, [name])


  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} type="text" onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}


export default App
