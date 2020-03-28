import React from "react";
import { VectorMap } from "react-jvectormap";

class CustomJVectorMap extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Kasus Berdasarkan Peta Negara</h5>
          </div>
          <div className="map-height-500">
            <VectorMap
              map={"world_mill"}
              backgroundColor="#3b96ce"
              ref="map"
              containerStyle={{
                width: "100%",
                height: "100%"
              }}
              series={{
                markers: [
                  {
                    attribute: "fill",
                    scale: ["#FEE5D9", "#A50F15"],
                    values: data.kasus
                  },
                  {
                    attribute: "r",
                    scale: [5,20],
                    values: data.kasus
                  }
                ]
              }}
              onMarkerTipShow={(event, label, index) => {
                label.html(
                  `<b> ${data.negara[index]}
                  </b><br/>
                  <b>Kasus: </b> 
                  ${data.kasus[index]}
                  </br>`
                );
              }}
              markers={data.coords}
              markersSelectable
              containerClassName="map"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CustomJVectorMap;
