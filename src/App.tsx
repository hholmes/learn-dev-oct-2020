import * as React from "react";
import "./styles.css";
import { Card } from "./components/Card";
import faker from "faker";

export default function App() {
  return (
    <div className="App">
      {Array.from({ length: 12 }, (x, i) => i).map((i) => (
        <Card>
          <img src={faker.image.avatar()} alt="" />
          <h3>{faker.name.firstName() + " " + faker.name.lastName()}</h3>
          <p>{faker.address.city() + ", " + faker.address.state()}</p>
        </Card>
      ))}
    </div>
  );
}
