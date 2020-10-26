import React from "react";
import { Card } from "./Card";
import { UserControls } from "./UserControls";

interface UserCardProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    cover: string;
    address: {
      city: string;
    };
    title: string;
    role: string;
  };
}

export const UserCard = ({ user }: UserCardProps) => (
  <Card className="overflow-hidden rounded-lg shadow-md">
    <img src={user.cover} alt={""} />
    <div className="flex flex-row flex-wrap p-3 pb-2">
      <div className="flex-initial flex items-start">
        <img
          className="rounded-full w-12"
          src={user.avatar}
          alt={user.username}
        />
      </div>
      <div className="flex-1 pl-4 mt-1">
        <p>
          <span className="text-lg font-bold text-indigo-800">{user.name}</span>{" "}
        </p>
        <p className="text-indigo-700">{user.title}</p>
        <p className="mt-2 text-xs uppercase font-light text-gray-600">
          {user.address.city}
        </p>
      </div>
      <UserControls classNames="border-t-2 mt-4 mb-1 pt-3" role={user.role} />
    </div>
  </Card>
);
