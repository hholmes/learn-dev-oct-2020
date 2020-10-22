import * as React from "react";
import "./styles.css";
import { UserCard } from "./components/UserCard";
import utils from "./utils";
import faker from "faker";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>People</h1>
        {Array.from({ length: 12 }, (x, i) => i).map((i) => (
          <UserCard
            user={{
              ...faker.helpers.contextualCard(),
              cover: faker.random.arrayElement([
                faker.image.abstract(),
                faker.image.business(),
                faker.image.nature(),
                faker.image.people(),
                faker.image.imageUrl()
              ]),
              title: faker.name.jobTitle(),
              role: utils.randomRole()
            }}
          />
        ))}
      </div>
    </div>
  );
}
