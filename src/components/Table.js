import React from "react";
import Table from "react-bootstrap/Table";
import { FormattedDate, FormattedMessage } from "react-intl";
import moment from "moment";

export default function CustomTable({ columns, rows, setSelected }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <FormattedMessage id="name" />
          </th>
          <th>
            <FormattedMessage id="channel" />
          </th>
          <th>
            <FormattedMessage id="seasons" />
          </th>
          <th>
            <FormattedMessage id="episodes" />
          </th>
          <th>
            <FormattedMessage id="release" />
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((ro, i) => (
          <tr key={i} onClick={() => setSelected(ro)}>
            <td key={"r" + i}>{ro.id}</td>
            <td key={"r" + i}>{ro.name}</td>
            <td key={"r" + i}>{ro.channel}</td>
            <td key={"r" + i}>{ro.seasons}</td>
            <td key={"r" + i}>{ro.episodes}</td>
            <td key={"r" + i}>
              <FormattedDate
                value={moment(ro.release, "DD/MM/YYYY").toDate()}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
