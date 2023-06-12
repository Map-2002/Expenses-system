import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const values=props.dataPoints.map(datapoint=>datapoint.value);
    const maxval=Math.max(...values);
    console.log(maxval);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          MaxValue={maxval}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
