import React from "react";
import {
  Dropdown as WMDropdown,
  DropdownItem as WMDropdownItem,
} from "@windmill/react-ui";

type DropdownProps = {
  onClose: () => void;
};
export const Dropdown = ({ onClose, ...props }: DropdownProps) => {
  return <WMDropdown isOpen onClose={onClose} {...props} />;
};

type DropdownItemProps = {};
export const DropdownItem = (props: DropdownItemProps) => {
  return <WMDropdownItem {...props} />;
};
