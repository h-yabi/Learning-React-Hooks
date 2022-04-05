import { useReducer } from "react"

import CreateEventForm from './CreateEventForm'
import Events from './Events'
import reducer from "../reducers"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container mt-5">
      <CreateEventForm event={state} dispatch={dispatch} />
      <Events event={state} dispatch={dispatch} />
    </div>
  )
}

export default App
