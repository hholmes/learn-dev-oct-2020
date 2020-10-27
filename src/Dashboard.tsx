import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RandomChart } from "./providers/data";
import { ChartCard } from "./components/ChartCard";
import faker from "faker";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    text-align: right;
  }

  @media (max-width: 960px) {
    & {
      grid-template-columns: 100%;
      grid-gap: 1rem;
    }
  }

  @media (min-width: 1280px) {
    & {
      & > h1 {
        grid-column: span 2;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

interface OrderedGridItemProps {
  order: number;
}

const OrderedGridItem = styled.div<OrderedGridItemProps>`
  order: ${(props) => props.order};
`;

export const Dashboard = () => {
  const [dashes, setDashes] = React.useState([
    ...Array.from({ length: 12 }, (x, i) => i).map((i) => RandomChart())
  ]);

  React.useEffect(() => {
    const i = setInterval(() => {
      setDashes([
        ...Array.from({ length: 12 }, (x, i) => i).map((i) => RandomChart())
      ]);
    }, 5000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <Grid>
      <Link to="/">&larr;&nbsp;Users</Link>
      <h1>Dashboard</h1>
      {dashes.map((d) => {
        const s = faker.random.number(10) * 10;
        return (
          <OrderedGridItem order={s >= 95 ? 1 : s >= 90 ? 2 : 3}>
            <ChartCard severity={s}>{d}</ChartCard>
          </OrderedGridItem>
        );
      })}
    </Grid>
  );
};
