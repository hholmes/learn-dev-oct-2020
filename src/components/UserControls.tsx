import React from "react";
import { UserActionButton } from "./UserActionButton";

interface UserControlsProps {
  classNames?: string;
  role?: string;
}

export const UserControls = ({ classNames, role }: UserControlsProps) => (
  <div className={classNames + " w-full grid grid-cols-4 col-auto gap-2"}>
    {role ? (
      <div
        className={`col-span-2 text-xl font-bold text-gray-${
          role === "admin" ? 800 : 400
        } uppercase ml-2`}
      >
        {role}
      </div>
    ) : (
      <div className="col-span-2"></div>
    )}
    <UserActionButton title="promote" classNames="ml-auto" />
    <UserActionButton title="reassign" />
  </div>
);
