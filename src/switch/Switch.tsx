import React from "react";
import { Switch as HUISwitch } from "@headlessui/react";

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
};
export const Switch = ({ checked, onChange, ...props }: SwitchProps) => {
  return <HUISwitch checked={checked} onChange={onChange} {...props} />;
};
