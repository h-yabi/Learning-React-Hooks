const Event = ({ event, dispatch }) => {
  const deleteEvent = (id) => {
    dispatch({
      type: 'DELETE_EVENT',
      id
    })
  }

  return (
    <div className="mt-5">
      <h4>イベント一覧</h4>
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
          {event.map((event, index) => {
            return (
              <tr key={index}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => deleteEvent(event.id)}>削除</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Event
