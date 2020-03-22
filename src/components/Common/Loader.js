import React from 'react';
import "./loader.css";
const Loader = props => (
  <div className="overlay-loader">
    <div className="loader center">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Sedang dimuat...</span>
      </div>
    </div>
  </div>
);

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;