import React from "react"; // we need this to make JSX compile

type CardProps = {
  children: any;
};

export const Card = (props: CardProps) => <div>{props.children}</div>;
