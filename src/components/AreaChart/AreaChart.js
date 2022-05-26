import React from "react";
import { Chart } from "react-google-charts";
import "../AreaChart/AreaChart.scss";

const options = {
  title: "Date vs. Modules",
  hAxis: { title: "Dates" },
  vAxis: { title: "Modules", viewWindow: { min: 0} },
  legend: "none",
  chartArea: {witdth: "70%", height: "70%"}
};

const data = [
  ["Date", "Modules"],
  ["11-21-21", 0],
  ["11-22-21", 1],
  ["11-23-21", 2],
  ["11-24-21", 3],
  ["11-25-21", 4]
];

function AreaChart() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default AreaChart;
