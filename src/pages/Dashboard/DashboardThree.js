import React from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";
import { isEmpty } from "../../commons/helper";
import history from "../../history";
import loadable from "@loadable/component";
import { Row, Breadcrumb, Col, Container } from "react-bootstrap";
import "./home.css";
const Header = loadable(() => import("../../components/Header/header"));
const Footer = loadable(() => import("../Footer/Footer"));
const DistributedColumnsChart = loadable(() =>
  import("../Apex-Charts/column-charts-components/DistributedColumnsChart")
);

const DashboardThree = () => {
  let fromRouter = history.location.state;
  let fromBrowser = window.location.pathname.split("/");
  let slug = !isEmpty(fromRouter)
    ? fromRouter
    : fromBrowser[fromBrowser.length - 1];
  const { dataByCountry } = useSelector(
    ({ getAllCountries }) => getAllCountries
  );
  const hightlight = !isEmpty(dataByCountry)
    ? [
        { value: dataByCountry.cases, label: "Kasus", style: "purple" },
        {
          value: dataByCountry.todayCases,
          label: "Kasus Hari ini",
          style: "gray"
        },
        { value: dataByCountry.active, label: "Terinfeksi", style: "gray" },
        { value: dataByCountry.recovered, label: "Sembuh", style: "success" },
        { value: dataByCountry.critical, label: "Kritis", style: "danger" },
        { value: dataByCountry.deaths, label: "Meninggal", style: "gray" }
      ]
    : [];
  return (
    <div className="page-wrapper">
      <Header />
      <Container className="bg-container shadow">
        <div className="main-content-header">
          <Breadcrumb>
            <Breadcrumb.Item>Negara</Breadcrumb.Item>
            <Breadcrumb.Item active>{slug.toUpperCase()}</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Row>
          {!isEmpty(dataByCountry) &&
            hightlight.map((item, key) => (
              <Col key={key} sm={6} lg={4}>
                <div className={`stats-card ${item.style}-card mb-4`}>
                  <h3>
                    {item.value}
                    <Icon.Activity className="icon" />
                  </h3>
                  <p>{item.label}</p>
                  <i className="lni-world" />
                </div>
              </Col>
            ))}
        </Row>
        {/* Visitors Overview */}
        <div className="row">
          <Col lg={12}>
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-header">
                  {/* <h5 className="card-title">Visitors Overview</h5> */}
                  <span className="day">Update hari ini</span>
                </div>
                {!isEmpty(dataByCountry) && (
                  <DistributedColumnsChart dataByCountry={dataByCountry} />
                )}
              </div>
            </div>
          </Col>
        </div>

        <div className="flex-grow-1"></div>
        <Footer />
      </Container>
    </div>
  );
};

export default DashboardThree;
