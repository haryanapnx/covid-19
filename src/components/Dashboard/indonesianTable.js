import React from "react";
import { Table, Badge } from "react-bootstrap";

const IndonesianTable = ({ data }) => {
  return (
    <div className="card mb-4 mt-2">
      <div className="card-body">
        <div className="card-header">
          <h5 className="card-title">Info kasus di setiap Provinsi</h5>
        </div>
        <div className="height-310">
          <Table className="m-0" responsive>
            <thead>
              <tr>
                <th>Provinsi</th>
                <th>Kasus Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
              </tr>
            </thead>

            <tbody>
              {data.map((province, idx) => (
                <tr key={idx}>
                  <td>{province.provinsi}</td>
                  <td>
                    <Badge variant="info">{province.kasusPosi}</Badge>
                  </td>
                  <td>
                    <Badge variant="success">{province.kasusSemb}</Badge>
                  </td>
                  <td>
                    <Badge variant="dark">{province.kasusMeni}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default IndonesianTable;
