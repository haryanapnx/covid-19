import React from "react";
import { Row, Breadcrumb, Col, Container } from "react-bootstrap";
import loadable from "@loadable/component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import "./home.css";
import { isEmpty } from "../../commons/helper";
import Header from "../../components/Header/header";

const CustomJVectorMap = loadable(() => import("../Map/CustomJVectorMap"));
const NewUsers = loadable(() => import("../../components/Dashboard/NewUsers"));
// const Header = loadable(() => import("../../components/Header/header"));
const Footer = loadable(() => import("../Footer/Footer"));
const SalesByCountries = loadable(() =>
  import("../../components/Dashboard/SalesByCountries")
);

const Home = () => {
  const { dataGlobal, dataMap, data } = useSelector(
    ({ getAllCountries }) => getAllCountries
  );

  const hightlight = !isEmpty(dataGlobal)
    ? [
        { value: dataGlobal.cases, label: "Kasus", style: "purple" },
        { value: dataGlobal.deaths, label: "Meninggal", style: "danger" },
        { value: dataGlobal.recovered, label: "Sembuh", style: "success" }
      ]
    : [];
  return (
    <div className="page-wrapper">
      <Header />
      <Container className="bg-container shadow">
        <div className="main-content-header">
          <Breadcrumb>
            <Link
              to={{
                pathname: "/",
                state: ""
              }}
            >
              <b>Total Kasus Di seluruh dunia</b>
            </Link>
          </Breadcrumb>
        </div>
        <Row>
          {!isEmpty(dataGlobal) &&
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
        {!isEmpty(data) && (
          <Row>
            <Col lg={12}>
              <NewUsers data={data} />
            </Col>

            <Col lg={12}>
              <CustomJVectorMap data={dataMap} />
            </Col>
            <Col lg={12}>
              <SalesByCountries data={data} />
            </Col>
          </Row>
        )}
        <div className="flex-grow-1"></div>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
