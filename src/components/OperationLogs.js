import { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const OperationLogs = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <h4 className="mt-5">操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((log, index) => {
            return (
              <tr key={index}>
                <td>{log.description}</td>
                <td>{log.operatedAt}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs
