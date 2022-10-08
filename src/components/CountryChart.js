import React from "react";
import { CircularProgress } from "@mui/material";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";
import "hammerjs";

/**
 * Shows the chart of countries
 * @returns JSX containing the historical data page
 */

function CountryChart({ countrySlug, countryInfo }) {
  if (countryInfo[0].values.length < 1) {
    return <CircularProgress />;
  }
  return (
    <Chart
      style={{
        height: {
            xs: 250,
            sm: 450,
            md: 650,
            lg: 500
        },
        width: {
            xs: 250,
            sm: 450,
            md: 650,
            lg: 500
        },
      }}
    >
      <ChartTitle text={countrySlug.toUpperCase().replaceAll("-", " ")} />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartSeries>
        {countryInfo.slice(0, 3).map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="line"
            tooltip={{
              visible: true,
            }}
            data={item.values}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
}
export default CountryChart;
