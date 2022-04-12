import { useContext } from 'react';
import { ADD_OPERATION_LOG, DELETE_EVENT } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from "../utils";

const Events = () => {
  const { state, dispatch} = useContext(AppContext)
  const deleteEvent = (id) => {
    if (window.confirm(`id: ${id}を削除しても良いですか？`)) {
      dispatch({
        type: DELETE_EVENT,
        id
      })
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント（id=${id}）を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  return (
    <>
      <h4 className="mt-5">イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => {
            return (
              <tr key={index}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteEvent(event.id)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Events
