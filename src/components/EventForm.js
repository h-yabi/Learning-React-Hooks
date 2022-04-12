import { useState, useContext } from "react"
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';
import AppContext from "../contexts/AppContext"
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const { state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = () => {
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })
    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    })
    setTitle('')
    setBody('')
  }

  const unCreatable = title.length === 0 || body.length === 0

  const deleteAllEvents = () => {
    if (window.confirm('全てのイベントを削除しても良いですか？')) {
      dispatch({ type: DELETE_ALL_EVENTS })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllLogs = () => {
    if (window.confirm('全てのログを削除しても良いですか？')) {
      dispatch({ type: DELETE_ALL_OPERATION_LOGS })
    }
  }

  return (
    <>
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
        <button
          type="button"
          className="btn btn-primary mr-3"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          type="button"
          className="btn btn-danger mr-3"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteAllLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  )
}

export default EventForm
