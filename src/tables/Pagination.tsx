import React from "react";
import { Pagination as WMPagination } from "@windmill/react-ui";

type PaginationProps = {
  totalResults: number;
  label: string;
  onChange: () => void;
};
export const Pagination = ({
  totalResults,
  label,
  onChange,
  ...props
}: PaginationProps) => {
  return (
    <WMPagination
      label={label}
      totalResults={totalResults}
      onChange={onChange}
      {...props}
    />
  );
};
