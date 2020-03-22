import React from "react";
import { Button } from "react-bootstrap";
class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer mt-2">
          <p>
            Powered by{" "}
            <a href="https://hary.fun" target="blank">
              Hary.fun
            </a>{" "}
            | Allrights Reserved @ 2020
          </p>
          <p>
            Sumber di dapat dari{" "}
            <a href="https://www.worldometers.info/coronavirus/" target="blank">
              worldometers.info
            </a>
          </p>
        </footer>
        <Button
          style={{ position: "fixed", bottom: "10px", right: "10px" }}
          onClick={() => window.scrollTo(0, 0)}
          variant="outline-primary"
        >
          <i className="lni-angle-double-up" />
        </Button>
      </>
    );
  }
}

export default Footer;
