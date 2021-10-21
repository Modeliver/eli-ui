import React from "react";

import { Alert as WMAlert } from "@windmill/react-ui";

type AlertProps = {};

export const Alert = (props: AlertProps) => {
  return <WMAlert {...props} />;
};
