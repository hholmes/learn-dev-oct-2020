import React from "react";
import { UserControlsModal } from "./UserControlsModal";

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
    <UserControlsModal action="promote" classNames="ml-auto" />
    <UserControlsModal action="reassign" classNames="ml-auto" />
  </div>
);
