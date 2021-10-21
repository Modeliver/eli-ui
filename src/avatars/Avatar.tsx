import React from "react";
import { Avatar as WMAvatar } from "@windmill/react-ui";

type AvatarProps = {
  src: string;
};

export const Avatar = ({ src, ...props }: AvatarProps) => {
  return <WMAvatar src={src} {...props} />;
};
