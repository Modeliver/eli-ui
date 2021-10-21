import React from "react";
import { Input as WMInput } from "@windmill/react-ui";

type InputProps = {
  css: string;
};

export const Input = ({ css, ...props }: InputProps) => {
  return <WMInput css={css} {...props} />;
};
