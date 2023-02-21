import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { LineChartData as data } from "../../data/chartData";
import { ResponsiveLine } from "@nivo/line";
const LineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="70vw"
      height="80vh"
      display="flex"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
      sx={{ "& Box>text": { fill: "white" } }}
    >
      <ResponsiveLine
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.textColor[700],
              },
            },
            legend: {
              text: {
                fill: colors.textColor[700],
              },
            },
            ticks: {
              line: {
                stroke: colors.textColor[700],
                strokeWidth: 1,
              },
              text: {
                fill: colors.textColor[700],
              },
            },
          },
          legends: {
            text: {
              fill: colors.textColor[700],
            },
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "category10" }}
        lineWidth={3}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        areaOpacity={0}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default LineChart;
