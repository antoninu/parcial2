import React from "react";
import Table from "react-bootstrap/Table";

export default function CustomTable({ columns, rows, setSelected }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((co, i) => (
            <th key={i}>{co.charAt(0).toUpperCase() + co.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((ro, i) => (
          <tr key={i} onClick={() => setSelected(ro)}>
            {columns.map((co, i) => (
              <td key={i}>{ro[co]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
