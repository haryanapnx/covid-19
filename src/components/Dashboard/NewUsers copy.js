import React from "react";
import { Link } from "react-router-dom";
import {
  // Table,
  Badge
} from "react-bootstrap";
import { FixedSizeList } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";
import { Html5Table as WindowTable } from "window-table";
import {
  Column,
  Table,
  SortDirection,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
  List,
} from "react-virtualized";
import "react-virtualized/styles.css";
import './table.css'



const NewUsers = ({ data }) => {
const cache = new CellMeasurerCache({
  defaultWidth: 100,
  minWidth: 75,
  fixedHeight: true
});

const renderRow = ({ index, parent, key, style }) => {
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <tr >
        <td>
          <Link
            to={{
              pathname: `/countries/${data[index].country.toLowerCase()}`,
              state: ""
            }}
          >
            <img
              style={{ maxWidth: "15px" }}
              src={data[index].countryInfo.flag}
              alt={index}
            />{" "}
            {data[index].country}
          </Link>
        </td>
        <td>
          <Badge variant="info">{data[index].cases}</Badge>
        </td>
        <td>
          <Badge variant="secondary">{data[index].todayCases}</Badge>
        </td>
        <td>
          <Badge variant="success">{data[index].recovered}</Badge>
        </td>
        <td>
          <Badge variant="warning">{data[index].active}</Badge>
        </td>
        <td>
          <Badge variant="danger">{data[index].critical}</Badge>
        </td>
        <td>
          <Badge variant="dark">{data[index].deaths}</Badge>
        </td>
      </tr>
    </CellMeasurer>
  );
};


  return (
    <div className="card mb-4 mt-2">
      <div className="card-body">
        <div className="card-header">
          <h5 className="card-title">Info Kasus Di Setiap Negara</h5>
        </div>
        <div className="height-310 ">
          {/* <RenderGrid data={data}/> */}
          <AutoSizer>
            {({ height, width }) => (
              <Table
                // autoHeight
                className="table"
                width={width}
                height={height}
                headerHeight={50}
                // rowStyle={{overflowX:'scroll', width:'100%', display:'block'}}
                // autoWidth={true}
                // headerStyle={{backgroundColor:'grey'}}
                // rowHeight={30}
                // headerClassName
                rowCount={data.length}
                rowGetter={({ index }) => data[index]}
                // deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                // rowRenderer={renderRow}
              >
                <Column
                  // minWidth={200}
                  label="Negara"
                  cellRenderer={({ cellData, rowData }) => {
                    return (
                      <Link
                        to={{
                          pathname: `/countries/${cellData.toLowerCase()}`,
                          state: ""
                        }}
                      >
                        <img
                          style={{ maxWidth: "15px" }}
                          src={rowData.countryInfo.flag}
                          alt={cellData}
                        />{" "}
                        {cellData}
                      </Link>
                    );
                  }}
                  dataKey="country"
                  width={300}
                  // flexGrow={3}
                />
                <Column
                  cellRenderer={({ cellData }) => (
                    <Badge variant="info">{cellData}</Badge>
                  )}
                  width={200}
                  label="Kasus"
                  dataKey="cases"
                />
                <Column
                  width={300}
                  label="Kasus Hari ini"
                  dataKey="todayCases"
                  cellRenderer={({ cellData }) => (
                    <Badge variant="secondary">{cellData}</Badge>
                  )}
                />
                <Column
                  width={200}
                  cellRenderer={({ cellData }) => (
                    <Badge variant="success">{cellData}</Badge>
                  )}
                  label="Sembuh"
                  dataKey="recovered"
                />
                <Column
                  width={200}
                  cellRenderer={({ cellData }) => (
                    <Badge variant="warning">{cellData}</Badge>
                  )}
                  label="Terinfeksi"
                  dataKey="active"
                />
                <Column
                  width={200}
                  cellRenderer={({ cellData }) => (
                    <Badge variant="danger">{cellData}</Badge>
                  )}
                  label="Kritis"
                  dataKey="critical"
                />
                <Column
                  width={200}
                  cellRenderer={({ cellData }) => (
                    <Badge variant="dark">{cellData}</Badge>
                  )}
                  label="Meninggal"
                  dataKey="deaths"
                />
              </Table>
            )}
          </AutoSizer>
        </div>
        {/* <AutoSizer>
          {({ height, width }) => (
            <WindowTable
              data={data}
              columns={[
                {
                  key: "country",
                  width: width,
                  title: "Negara",
                  Component: Flag
                },
                { key: "cases", width: width, title: "Kasus" },
                { key: "todayCases", width: width, title: "Kasus Hari ini" },
                { key: "recovered", width: width, title: "Sembuh" },
                { key: "critical", width: width, title: "Kritis" },
                { key: "deaths", width: width, title: "Meninggal" }
              ]}
              // className="table"
              // width={width}
              // height={height}
              Cell="td"
              HeaderCell="th"
              // Header={
              //   <thead>
              //     <tr>
              //       <th>Index</th>
              //       <th>Header 2</th>
              //       <th>Header 3</th>
              //       <th>Header 4</th>
              //     </tr>
              //   </thead>
              // }
              HeaderRow="tr"
              Row="tr"
              Body="tbody"
              Table="table"
              headerCellInnerElementType="th"
              tableCellInnerElementType="td"
            />
          )}
        </AutoSizer> */}
        {/* <Table className="m-0" responsive>
            <thead>
              <tr>
                <th></th>
                <th>Negara</th>
                <th>Kasus</th>
                <th>Kasus Hari ini</th>
                <th>Sembuh</th>
                <th>Terinfeksi</th>
                <th>Kritis</th>
                <th>Meninggal</th>
              </tr>
            </thead> */}

        {/* <tbody>
              <FixedSizeList
                height={500}
                width={"100%"}
                itemSize={12}
                outerTagName="table"
                innerTagName="tbody"
                itemCount={data.length}
              >
                {RowTable} */}
        {/* 
              {data.map((people, idx) => ( */}
        {/* <tr key={idx}>
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
                      />{" "}
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
                </tr> */}
        {/* ))} */}
        {/* </FixedSizeList>
            </tbody>
          </Table> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default NewUsers;
