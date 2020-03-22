import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { Form, Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";
import "./header.css";
import { isEmpty } from "../../commons/helper";
import { getAllCountry, getByGLobal } from "../../redux/actions";
import * as Icon from "react-feather";
import loadable from "@loadable/component";
const Loader = loadable(() => import("../Common/Loader"));

const Header = () => {
  let fromRouter = history.location.state;
  let fromBrowser = window.location.pathname.split("/");
  let slug = !isEmpty(fromRouter)
    ? fromRouter
    : fromBrowser[fromBrowser.length - 1];
  const dispatch = useDispatch();
  const [endpoint, setEndpoint] = useState("");
  const [selectCountry, setSelectCountry] = useState(null);
  const { countries, loading } = useSelector(
    ({ getAllCountries }) => getAllCountries
  );

  useEffect(() => {
    setEndpoint(slug);
    setSelectCountry({ value: slug, label: slug });
    getApi(endpoint);
  }, [fromRouter, endpoint]);

  const getApi = async param => {
    await dispatch(getAllCountry(param));
    await dispatch(getByGLobal());
  };
  const toHome = () => {
    window.scrollTo(0, 0);
    history.push({ pathname: "/", state: "" });
  };
  const findCountry = ({ value }) => {
    history.push({ pathname: `/countries/${value}`, state: value });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="bottom-nav shadow">
        <Row>
          <Col xs={6}>
            <Button onClick={toHome} variant="outline-link">
              <Icon.Home className="icon" />
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="outline-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Icon.Search className="icon" />
            </Button>
          </Col>
        </Row>
      </div>
      <Jumbotron className="bg-header" fluid>
        <Container>
          <Link
            to={{
              pathname: "/",
              state: ""
            }}
          >
            <h1 style={{ color: "#fff" }}>Info Seputar Covid-19</h1>
          </Link>
          <p style={{ color: "#fff" }}>
            Gunakan fitur cari, temukan data terupdate mengenai Covid-19 di
            setiap negara.
          </p>
          <Form id="responsive-navbar-nav">
            <Select
              onChange={findCountry}
              value={selectCountry}
              placeholder="Pilih Negara"
              styles={{ width: "100%" }}
              options={countries}
            />
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
};
export default Header;
