import Table from 'react-bootstrap/Table';

function StripedColumnsExample({columns, rows}) {

  return (
    <Table striped="columns">
      <thead>
        <tr>
            {columns.map((column, index) => {
                return <th>{column}</th>
            })}
        </tr>
      </thead>
      <tbody>
      {rows.map((rows, index) => {
                <th>{rows}</th>
            })}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedColumnsExample;