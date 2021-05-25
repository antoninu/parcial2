import React, { useState, useEffect } from "react";
import Table from "./Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetcher from "../utils/fetcher";
import SerieCard from "./SerieCard";

const fetchSeries = async () => {
  const series = await fetcher(
    "get",
    "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json"
  );
  return series;
};

const tableColumns = [
  "id",
  "name",
  "channel",
  "seasons",
  "episodes",
  "release",
];

export default function Layout() {
  const [series, setSeries] = useState(null);
  const [selectedSerie, setSelectedSerie] = useState(null);

  useEffect(async () => {
    const series = await fetchSeries();
    setSeries(series);
    setSelectedSerie(series[0]);
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 style={{ textAlign: "left" }}>T.V. Series</h1>
        </Col>
      </Row>
      <Row>
        {series && selectedSerie ? (
          <React.Fragment>
            <Col xs={12} md={6} lg={8}>
              <Table
                columns={tableColumns}
                rows={series}
                setSelected={setSelectedSerie}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <SerieCard serie={selectedSerie} />
            </Col>
          </React.Fragment>
        ) : (
          <h4>Cargando...</h4>
        )}
      </Row>
    </Container>
  );
}
