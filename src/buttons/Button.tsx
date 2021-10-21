import React from "react";

import { Button as WMButton } from "@windmill/react-ui";

type ButtonProps = {
  title: string;
};

export const Button = ({ title, ...props }: ButtonProps) => {
  return <WMButton {...props}>{title}</WMButton>;
};
