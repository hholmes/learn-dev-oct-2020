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
    <img src={user.cover} alt={""} />
    <div>
      <img src={user.avatar} alt={user.username} />
    </div>
    <div>
      <h3>
        {user.name} {user.role !== "user" && <>({user.role})</>}
      </h3>
      <p>{user.title}</p>
      <p>{user.address.city}</p>
    </div>
    <UserControls />
  </Card>
);
