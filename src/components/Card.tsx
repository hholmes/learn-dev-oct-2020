import React from "react"; // we need this to make JSX compile

type CardProps = {
  children: any;
  className: string;
};

const cardStyles = ["shadow-sm sm:shadow-lg"].join(" ");

export const Card = (props: CardProps) => (
  <div className={props.className + " " + cardStyles}>{props.children}</div>
);
