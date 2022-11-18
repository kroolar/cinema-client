const Table = ({ headers, rows }) => (
  <table className="table">
    <thead className="rounded">
      <tr className="table__row">
        {headers?.map(header => (
          <th className="table__head">{header}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {rows?.map(row => (
        <tr>
          {row.map(column => (
            <td className="table__cell">{column}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Table
