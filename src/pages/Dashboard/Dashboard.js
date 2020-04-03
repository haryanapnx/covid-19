import React from "react";
import { Row, Breadcrumb, Col, Container } from "react-bootstrap";
import loadable from "@loadable/component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import "./home.css";
import { isEmpty } from "../../commons/helper";
import ContentLoader from "react-content-loader";

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
        <Row noGutters>
          <Col className="banner pl-3" sm={12} lg={12}>
            <div className="mt-2 headline">
              <h1>{!isEmpty(dataGlobal) ? dataGlobal.deaths : "-"}</h1>
              <h5>
                Orang Indonesia telah <br /> meninggal dunia <br />
                karena <b>Corona</b>
              </h5>
            </div>
            <a href="https://linktr.ee/helloimgalih" target="blank">
              <i>Image by galih</i>
            </a>
          </Col>
        </Row>
        <div className="main-content-header mt-4">
          <Breadcrumb>
            <Link
              to={{
                pathname: "/",
                state: ""
              }}
            >
              <b>Total kasus di seluruh dunia</b>
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

        <Row>
          {!isEmpty(data) && (
            <>
              <Col lg={12}>
                <CustomJVectorMap data={dataMap} />
              </Col>
              <Col lg={12}>
                <NewUsers data={data} />
              </Col>

              <Col lg={12}>
                <SalesByCountries data={data} />
              </Col>
            </>
          )}
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;

const Header = loadable(() => import("../../components/Header/header"), {
  fallback: <ContentLoader />
});
const CustomJVectorMap = loadable(() => import("../Map/CustomJVectorMap"), {
  fallback: <ContentLoader />
});
const NewUsers = loadable(() => import("../../components/Dashboard/NewUsers"), {
  fallback: <ContentLoader />
});
const Footer = loadable(() => import("../Footer/Footer"), {
  fallback: <ContentLoader />
});
const SalesByCountries = loadable(
  () => import("../../components/Dashboard/SalesByCountries"),
  {
    fallback: <ContentLoader />
  }
);
