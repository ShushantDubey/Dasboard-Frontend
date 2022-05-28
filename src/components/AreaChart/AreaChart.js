import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "../AreaChart/AreaChart.scss";
import Dropdown from "../Dropdown/Dropdown";

function AreaChart() {
  const data = {
    labels: [
      "11 - 21 - 21",
      "11 - 21 - 21",
      "11 - 21 - 21",
      "11 - 21 - 21",
      "11 - 21 - 21",
    ],
    datasets: [
      {
        label: "Modules",
        data: [0, 1, 2, 3, 4, 5],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="area-chart__container">
      <Dropdown />
      <Line
        data={data}
        height={60}
        options={{
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks:{
                font: {
                  size: 8,
                }
              }
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                autoSkip: false,
                maxRotation: 45,
                minRotation: 45,
                font: {
                  size: 8,
                }
              },
            },
          },
        }}
      />
    </div>
  );
}

export default AreaChart;
