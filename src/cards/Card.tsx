import React from "react";
import { Card as WMCard, CardBody as WMCardBody } from "@windmill/react-ui";

type CardProps = {};
export const Card = (props: CardProps) => {
  return <WMCard {...props} />;
};

type CardBodyProps = {};

export const CardBody = (props: CardBodyProps) => {
  return <WMCardBody {...props} />;
};
