import React from "react";
import Plot from "./Plot/Plot";

const generateSeriesData = (series) => {
  let data = [];

  series.forEach((se) => {
    data.push([se.episodes, se.seasons, se.name]);
  });

  return data;
};

export default function SeriesChart({ series }) {
  const data = series ? generateSeriesData(series) : null;

  return data && <Plot data={data} />;
}
