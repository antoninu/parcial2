import React from "react";
import Circles from "./Circles";
import Axis from "./Axis";
import { scaleLinear, max, axisLeft, axisBottom } from "d3";

function Plot({ data }) {
  const margin = { top: 40, right: 30, bottom: 40, left: 30 };
  const width = 800 - margin.left - margin.right;
  const height = 600 - margin.top - margin.bottom;

  const x = scaleLinear()
    .domain([
      0,
      max(data, function (d) {
        return d[0];
      }),
    ])
    .range([0, width]);

  const y = scaleLinear()
    .domain([
      0,
      max(data, function (d) {
        return d[1];
      }),
    ])
    .range([height, 0]);

  return (
    <div>
      <svg
        width={width + margin.right + margin.left}
        height={height + margin.top + margin.bottom}
        className="chart"
      >
        <g
          transform={"translate(" + margin.left + "," + margin.top + ")"}
          width={width}
          height={height}
          className="main"
        >
          <Circles data={data} scale={{ x, y }} />
          <Axis
            label="Episodes"
            axis="x"
            transform={"translate(0," + height + ")"}
            scale={axisBottom().scale(x)}
          />
          <Axis
            label="Seasons"
            axis="y"
            transform="translate(0,0)"
            scale={axisLeft().scale(y)}
          />
        </g>
      </svg>
    </div>
  );
}

export default Plot;
