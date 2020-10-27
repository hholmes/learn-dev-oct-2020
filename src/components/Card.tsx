import React from "react";

type CardProps = {
  children: any;
  className?: string;
};

const cardStyles = [
  "bg-white overflow-hidden rounded-lg shadow-md shadow-sm sm:shadow-lg"
].join(" ");

export const Card = (props: CardProps) => (
  <div className={cardStyles + " " + props.className}>{props.children}</div>
);
