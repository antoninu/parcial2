import React from "react";

function Circles({ data, scale, label }) {
  return (
    <g>
      {data.map((dat, i) => (
        <>
          <circle
            cx={scale.x(dat[0])}
            cy={scale.y(dat[1])}
            r="8"
            style={{ fill: "#FFA63D" }}
            key={i}
          />
          <text dx={scale.x(dat[0]) + 10} dy={scale.y(dat[1]) + 5}>
            {dat[2]}
          </text>
        </>
      ))}
    </g>
  );
}

export default Circles;
