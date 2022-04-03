import { useReducer } from "react"

import CreateEventForm from './CreateEventForm'
import Event from './Event'
import reducer from "../reducers"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container mt-5">
      <h4>イベント作成フォーム</h4>
      <CreateEventForm dispatch={dispatch} />

      <h4 className="mt-5">イベント一覧</h4>
      <Event event={state} dispatch={dispatch} />
    </div>
  )
}

export default App
