import React from "react";
import faker from "faker";
import styled, { keyframes } from "styled-components";

export interface StyledChartProps {
  severity: number;
}

const rotate = keyframes`
  from {
    transform: rotate(-.7deg);
  }
  to {
    transform: rotate(.7deg);
  }
`;

const StyledChart = styled.div<StyledChartProps>`
  border-radius: 16px;
  border: 5px solid white;
  background: white;
  border-color: ${(props) =>
    props.severity > 80
      ? props.severity >= 95
        ? "red"
        : "orange"
      : props.severity < 20
      ? "lightgreen"
      : "white"};
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  animation: ${rotate}
    ${(props) =>
      props.severity >= 95 ? ".075s ease-in-out infinite alternate" : "none"};
  @media (min-width: 1044px) {
    & {
      min-height: 18rem;
    }
  }
`;

const StyledChartTitle = styled.div`
  font-size: 1rem;
  padding: 1rem 1.5rem 0;
  text-align: left;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  span:last-of-type {
    font-weight: bold;
    text-align: right;
  }
`;

export const ChartCard = (props: any) => (
  <StyledChart severity={props.severity}>
    <StyledChartTitle>
      <span>
        {faker.hacker.noun()} ({faker.hacker.abbreviation()})
      </span>
      <span>
        {props.severity}% {faker.hacker.adjective()}
      </span>
    </StyledChartTitle>
    <div>{props.children}</div>
  </StyledChart>
);
