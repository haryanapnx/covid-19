import React from "react";
import { Row, Col } from "react-bootstrap";

const Banner = ({ data, negara }) => {
  return (
    <Row noGutters>
      <Col className="banner pl-3" sm={12} lg={12}>
        <div className="mt-2 headline">
          <h1>{data}</h1>
          <h5>
            Orang {negara} telah <br /> meninggal dunia <br />
            karena <b>Corona</b>
          </h5>
        </div>
        <a href="https://linktr.ee/helloimgalih" target="blank">
          <i>visual layout by @helloimgalih</i>
        </a>
      </Col>
    </Row>
  );
};

export default Banner;
