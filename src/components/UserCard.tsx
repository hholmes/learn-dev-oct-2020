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
  <Card>
    {/* Cover Image */}
    <img src={user.cover} alt={""} />

    <div className="flex flex-row flex-wrap p-3 pb-2">
      {/* User Details */}
      <div className="flex-initial flex items-start">
        <img className="rounded-full w-12 ml-1 mt-1" src={user.avatar} alt="" />
      </div>
      <div className="flex-1 pl-4 mt-1 h-24">
        <p>
          <span className="text-xl font-bold text-indigo-800">{user.name}</span>{" "}
        </p>
        <p className="text-indigo-700">{user.title}</p>
        <p className="mt-2 text-xs uppercase font-light text-gray-600">
          {user.address.city}
        </p>
      </div>

      {/* Footer Controls */}
      <UserControls classNames="border-t-2 mt-4 mb-1 pt-3" role={user.role} />
    </div>
  </Card>
);
