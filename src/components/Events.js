const Events = ({ event, dispatch }) => {
  const deleteEvent = (id) => {
    if (window.confirm(`id: ${id}を削除しても良いですか？`)) {
      dispatch({
        type: 'DELETE_EVENT',
        id
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
          {event.map((event, index) => {
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
