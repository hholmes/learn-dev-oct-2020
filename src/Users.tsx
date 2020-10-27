import * as React from "react";
import { Link } from "react-router-dom";
import { UserCard } from "./components/UserCard";
import utils from "./utils";
import faker from "faker";

const dim = {
  width: 600,
  height: 300
};

export const Users = () => (
  <div>
    <div className="w-full flex flex-row items-center">
      <h1 className="w-full text-5xl font-bold mb-8 text-indigo-900">Users</h1>
      <Link to="/dashboard">Dashboard&nbsp;&rarr;</Link>
    </div>
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {Array.from({ length: 12 }, (x, i) => i).map((i) => (
        <li key={i}>
          <UserCard
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
);
