import React from "react";
import { Link } from "react-router-dom";
import { Table, Badge } from "react-bootstrap";

const NewUsers = ({ data }) => {
  return (
    <div className="card mb-4 mt-2">
      <div className="card-body">
        <div className="card-header">
          <h5 className="card-title">Info Kasus Di Setiap Negara</h5>
        </div>
        <div className="height-310">
          <Table className="m-0" responsive>
            <thead>
              <tr>
                <th>Negara</th>
                <th>Kasus</th>
                <th>Kasus Hari ini</th>
                <th>Sembuh</th>
                <th>Terinfeksi</th>
                <th>Kritis</th>
                <th>Meninggal</th>
              </tr>
            </thead>

            <tbody>
              {data.map((people, idx) => (
                <tr key={idx}>
                  <td>
                    <Link
                      to={{
                        pathname: `/countries/${people.country.toLowerCase()}`,
                        state: ""
                      }}
                    >
                      <img
                        style={{ maxWidth: "15px" }}
                        src={people.countryInfo.flag}
                        alt={idx}
                      />{' '}
                       {people.country}
                    </Link>
                  </td>
                  <td>
                    <Badge variant="info">{people.cases}</Badge>
                  </td>
                  <td>
                    <Badge variant="secondary">{people.todayCases}</Badge>
                  </td>
                  <td>
                    <Badge variant="success">{people.recovered}</Badge>
                  </td>
                  <td>
                    <Badge variant="warning">{people.active}</Badge>
                  </td>
                  <td>
                    <Badge variant="danger">{people.critical}</Badge>
                  </td>
                  <td>
                    <Badge variant="dark">{people.deaths}</Badge>
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

export default NewUsers;
