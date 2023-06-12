import React from "react";
import "./ChartBar.css";
const ChartBar=(props) =>{
    let barfilhieght="0%";
    if(props.MaxValue>0)
    {
        barfilhieght=Math.round((props.value/props.MaxValue)*100)+"%";
    }
    console.log(props.MaxValue);
      return (
        <div className="chart-bar">
        <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height :barfilhieght}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
        </div>
      );
}
export default ChartBar;