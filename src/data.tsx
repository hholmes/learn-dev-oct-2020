import React from "react";
import {
  VictoryChart,
  VictoryBoxPlot,
  VictoryScatter,
  VictoryLine,
  VictoryAxis,
  VictoryCandlestick,
  VictoryPolarAxis,
  VictoryBar,
  VictoryArea
} from "victory";
import faker from "faker";

export const RandomChart = (color: string = "lightgray") => {
  const n = faker.random.number(5) + 1;
  return faker.random.arrayElement([
    <VictoryChart domainPadding={20}>
      <VictoryBoxPlot
        boxWidth={16}
        data={[
          { x: 1, y: [n, n * 2, n * 3, n * 4] },
          { x: 2, y: [n, n * 2, n * 3, n * 4].reverse() },
          { x: 3, y: [n * 2, n, n / 2, n * 5] },
          { x: 4, y: [n * 2, n, n / 2, n * 5].reverse() }
        ]}
        style={{
          q1: { fill: color }
        }}
      />
    </VictoryChart>,
    <VictoryChart domain={{ x: [0, 5], y: [0, n + 15] }}>
      <VictoryScatter
        style={{ data: { fill: color } }}
        size={n}
        data={[
          { x: 1, y: n },
          { x: 2, y: n + 1 },
          { x: 3, y: n + 5 },
          { x: 4, y: n + 10 },
          { x: 5, y: n + 13 }
        ]}
      />
    </VictoryChart>,
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: color },
          parent: { border: "1px solid #ccc" }
        }}
        data={[
          { x: 1, y: n },
          { x: 2, y: n + 2 },
          { x: 3, y: n - 1 },
          { x: 4, y: n * 2 },
          { x: 5, y: n * 3 }
        ]}
      />
    </VictoryChart>,
    <VictoryChart domainPadding={{ x: 25 }} scale={{ x: "time" }}>
      <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`} />
      <VictoryAxis dependentAxis />
      <VictoryCandlestick
        candleColors={{ positive: "#5f5c5b", negative: color }}
        data={[
          {
            x: new Date(2016, 6, 1),
            open: n,
            close: n * 2,
            high: n * 3,
            low: 0
          },
          {
            x: new Date(2016, 6, 2),
            open: n * 2,
            close: n * 3,
            high: n * 4,
            low: n
          },
          {
            x: new Date(2016, 6, 3),
            open: n * 3,
            close: n * 4,
            high: n * 4 + 2,
            low: n * 2
          },
          {
            x: new Date(2016, 6, 4),
            open: n * 4,
            close: n * 2,
            high: n * 5,
            low: n + 2
          },
          {
            x: new Date(2016, 6, 5),
            open: n * 2,
            close: n + 3,
            high: n * 3,
            low: n
          }
        ]}
      />
    </VictoryChart>,
    <VictoryChart polar startAngle={0} endAngle={180}>
      <VictoryPolarAxis
        tickValues={[0, 45, 90, 135, 180]}
        labelPlacement="vertical"
      />
      <VictoryBar
        style={{ data: { fill: color, width: 30 } }}
        data={[
          { x: 0, y: n * 1.5 - 4 },
          { x: 45, y: n / 2 },
          { x: 90, y: n },
          { x: 135, y: n - 1 },
          { x: 180, y: n + 1.5 }
        ]}
      />
    </VictoryChart>,
    <VictoryChart>
      <VictoryArea
        style={{ data: { fill: color } }}
        data={[
          { x: 1, y: n / 2, y0: 0 },
          { x: 2, y: n - 2, y0: 1 },
          { x: 3, y: n, y0: 1 },
          { x: 4, y: n + 1, y0: 2 },
          { x: 5, y: n + 3, y0: 2 }
        ]}
      />
    </VictoryChart>
  ]);
};
