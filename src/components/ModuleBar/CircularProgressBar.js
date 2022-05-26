import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Circularbar() {
    const value = 6;
  return (
    <CircularProgressbar
      value={value}
      text={`${value}`}
      maxValue={10}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 1,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: "butt",

        // Text size
        textSize: "35px",

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `rgba(62, 152, 199, ${value/ 10})`,
        textColor: "#014998",
        trailColor: "#d6d6d6",
        backgroundColor: "#CCD2D9",
      })}
    />
  );
}

export default Circularbar;
