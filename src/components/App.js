import { useReducer } from "react"
import AppContext from "../contexts/AppContext"

import EventForm from './EventForm'
import Events from './Events'
import reducer from "../reducers"

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container mt-5">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App
