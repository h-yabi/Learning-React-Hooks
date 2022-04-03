import { useState, useReducer } from "react"
import Event from './Event'
import reducer from "../reducers"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = () => {
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = () => {
    dispatch({ type: 'DELETE_ALL_EVENTS' })
  }

  return (
    <div className="container mt-5">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary mr-3" onClick={addEvent}>イベントを作成する</button>
        <button type="button" className="btn btn-danger" onClick={deleteAllEvents}>全てのイベントを削除する</button>
      </form>

      <Event event={state} dispatch={dispatch} />

    </div>
  )
}

export default App