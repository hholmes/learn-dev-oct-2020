import * as React from "react";
import "./styles/main.css";
import { UserCard } from "./components/UserCard";
import utils from "./utils";
import faker from "faker";

const dim = {
  width: 600,
  height: 300
};

export default function App() {
  return (
    <div className="App">
      <div className="min-h-screen flex items-center bg-gray-200">
        <div className="flex-1 max-w-6xl mx-auto p-10">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {Array.from({ length: 12 }, (x, i) => i).map((i) => (
              <li>
                <UserCard
                  key={i}
                  user={{
                    ...faker.helpers.contextualCard(),
                    cover: faker.image.abstract(dim.width, dim.height, true),
                    title: faker.name.jobTitle(),
                    role: utils.randomRole()
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
