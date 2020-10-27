import React from "react";
import { UserActionButton } from "./UserActionButton";

interface UserControlsProps {
  classNames?: string;
  role?: string;
}

export const UserControls = ({ classNames, role }: UserControlsProps) => (
  <div
    className={
      classNames +
      " w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 col-auto gap-2"
    }
  >
    <div
      className={`sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 text-sm pt-1 font-bold text-gray-${
        role === "admin" ? 800 : 400
      } uppercase ml-2`}
    >
      {role}
    </div>
    <UserActionButton title="promote" classNames="ml-auto" />
    <UserActionButton title="reassign" />
  </div>
);
