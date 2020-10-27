import React from "react";

interface UserActionButtonProps {
  title: string;
  classNames?: string;
  callback?: () => {};
}

const btnStyles =
  "w-full cursor-pointer text-xs font-medium text-white px-3 py-1 bg-indigo-500 rounded-md hover:bg-indigo-700";

export const UserActionButton = ({
  title,
  classNames,
  callback
}: UserActionButtonProps) => (
  <div className={btnStyles + " " + classNames}>{title}</div>
);
