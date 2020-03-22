import React from "react";
import Chart from "react-apexcharts";

const colors = [
  "#008FFB",
  "#D10CE8",
  "#FEB019",
  "#00E396",
  "#FF4560",
  "#775DD0",
  "#546E7A",
];

const DistributedColumnsChart = ({ dataByCountry }) => {
  return (
    <div id="chart" className="apexcharts-content">
      <Chart
        options={{
          chart: {
            events: {
              click: function(chart, w, e) {
                console.log(chart, w, e);
              }
            }
          },
          colors: colors,
          plotOptions: {
            bar: {
              columnWidth: "45%",
              distributed: true
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [
              dataByCountry.cases,
              dataByCountry.todayCases,
              dataByCountry.active,
              dataByCountry.recovered,
              dataByCountry.critical,
              dataByCountry.todayDeaths,
              dataByCountry.deaths
            ],
            labels: {
              style: {
                colors: colors,
                fontSize: "14px"
              }
            }
          }
        }}
        series={[
          {
            data: [
              dataByCountry.cases,
              dataByCountry.todayCases,
              dataByCountry.active,
              dataByCountry.recovered,
              dataByCountry.critical,
              dataByCountry.todayDeaths,
              dataByCountry.deaths
            ]
          }
        ]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default DistributedColumnsChart;
