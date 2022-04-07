import { useReducer } from "react"
import AppContext from "../contexts/AppContext"

import CreateEventForm from './CreateEventForm'
import Events from './Events'
import reducer from "../reducers"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello, I am a provider'}>
      <div className="container mt-5">
        <CreateEventForm event={state} dispatch={dispatch} />
        <Events event={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  )
}

export default App
