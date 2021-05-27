import React, { useState, useEffect } from "react";
import Table from "./Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import fetcher from "../utils/fetcher";
import SerieCard from "./SerieCard";
import { useIntl, FormattedMessage } from "react-intl";

const fetchSeries = async (locale) => {
  const series = await fetcher(
    "get",
    locale === "es" || locale === "es-ES" || locale === "es-CO"
      ? "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json"
      : "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/e2d16f7440d51cae06a9daf37b0b66818dd1fe31/series-en.json"
  );
  return series;
};

export default function Layout() {
  const [series, setSeries] = useState(null);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const intl = useIntl();

  useEffect(() => {
    const updateSeries = async () => {
      const series = await fetchSeries(intl.locale);
      localStorage.setItem("series", JSON.stringify(series));
      setSeries(series);
      setSelectedSerie(series[0]);
    };

    if (!navigator.onLine) {
      console.log("navigator offline");
      if (localStorage.getItem("series") === null) {
        setSeries(null);
        setSelectedSerie(null);
      } else {
        let savedSeries = JSON.parse(localStorage.getItem("series"));
        console.log("stores series retrieved");
        setSeries(savedSeries);
        setSelectedSerie(savedSeries[0]);
      }
    } else {
      updateSeries();
    }
  }, [intl.locale]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 style={{ textAlign: "left" }}>
            <FormattedMessage id="tvSeries" />
          </h1>
        </Col>
      </Row>
      <Row>
        {series && selectedSerie ? (
          <React.Fragment>
            <Col xs={12} md={6} lg={8}>
              <Table rows={series} setSelected={setSelectedSerie} />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <SerieCard serie={selectedSerie} />
            </Col>
          </React.Fragment>
        ) : (
          <h4>
            <FormattedMessage id="loading" />
          </h4>
        )}
      </Row>
    </Container>
  );
}
