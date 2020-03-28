import React from "react";
import { useSelector } from "react-redux";
import * as Icon from "react-feather";
import { isEmpty } from "../../commons/helper";
import history from "../../history";
import loadable from "@loadable/component";
import { Row, Breadcrumb, Col, Container } from "react-bootstrap";
import "./home.css";
import ContentLoader from "react-content-loader";

const DashboardThree = () => {
  const { dataByCountry, indonesia } = useSelector(
    ({ getAllCountries }) => getAllCountries
  );

  let fromRouter = history.location.state;
  let fromBrowser = window.location.pathname.split("/");

  let slug = !isEmpty(fromRouter)
    ? fromRouter
    : fromBrowser[fromBrowser.length - 1];

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
        <Row>
          {slug === 'indonesia' && !isEmpty(indonesia) && (
            <Col lg={12}>
              <IndonesianTable data={indonesia} />
            </Col>
          )}
          <Col lg={12}>
            <div className="card mb-4">
              <div className="card-body">
                <div className="card-header">
                  <span className="day">Update hari ini</span>
                </div>
                {!isEmpty(dataByCountry) && (
                  <DistributedColumnsChart dataByCountry={dataByCountry} />
                )}
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default DashboardThree;

const Header = loadable(() => import("../../components/Header/header"), {
  fallback: <ContentLoader />
});
const Footer = loadable(() => import("../Footer/Footer"), {
  fallback: <ContentLoader />
});
const DistributedColumnsChart = loadable(
  () =>
    import("../Apex-Charts/column-charts-components/DistributedColumnsChart"),
  {
    fallback: <ContentLoader />
  }
);
const IndonesianTable = loadable(
  () => import("../../components/Dashboard/indonesianTable"),
  {
    fallback: <ContentLoader />
  }
);
