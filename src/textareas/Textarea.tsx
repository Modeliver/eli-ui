import React from "react";
import { Textarea as WMTextArea } from "@windmill/react-ui";

export type TextAreaProps = {
  css: string;
};

export const Textarea = ({ css, ...props }: TextAreaProps) => {
  return <WMTextArea css={css} {...props} />;
};
