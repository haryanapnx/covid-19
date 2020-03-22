import React from "react";
import ReactEcharts from "echarts-for-react";

const SalesByCountries = ({ data }) => {
  let transformData = [];
  data.map(({ cases, country }) => {
    if (transformData.length !== 20) {
      transformData.push({ value: cases, name: country });
    }
  });
  return (
    <div className="card mb-4 overflow-hidden">
      <div className="card-body">
        <div className="card-header">
          <h5 className="card-title">20 Negara dengan kasus tertinggi</h5>
        </div>

        <ReactEcharts
          option={{
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
              {
                name: "Country",
                type: "pie",
                radius: "70%",
                center: ["50%", "50%"],
                data: transformData,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  }
                }
              }
            ]
          }}
          style={{ height: "450px" }}
          notMerge={true}
          lazyUpdate={true}
          opts={{ renderer: "svg" }}
        />
      </div>
    </div>
  );
};

export default SalesByCountries;
