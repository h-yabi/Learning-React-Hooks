import { useState } from "react"

const CreateEventForm = ({ event, dispatch }) => {
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

  const unCreatable = title.length === 0 || body.length === 0

  const deleteAllEvents = () => {
    dispatch({ type: 'DELETE_ALL_EVENTS' })
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="formEventTitle">タイトル</label>
        <input className="form-control" id="formEventTitle" type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="formEventBody">ボディー</label>
        <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary mr-3" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
      <button type="button" className="btn btn-danger" onClick={deleteAllEvents} disabled={event.length === 0}>全てのイベントを削除する</button>
    </form>
  )
}

export default CreateEventForm
