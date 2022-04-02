const App = () => {
  return (
    <div className="container mt-5">
      <h4>イベント作成フォーム</h4>
      <form>
      <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary mr-3">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

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

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default App;
