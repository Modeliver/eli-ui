import React from "react";
import {
  TableContainer as WMTableContainer,
  Table as WMTable,
  TableHeader as WMTableHeader,
  TableBody as WMTableBody,
  TableRow as WMTableRow,
  TableCell as WMTableCell,
  TableFooter as WMTableFooter,
} from "@windmill/react-ui";

export type TableContainerProps = {};

export const TableContainer = (props: TableContainerProps) => {
  return <WMTableContainer {...props} />;
};

export type TableProps = {};
export const Table = (props: TableProps) => {
  return <WMTable {...props} />;
};

export type TableHeaderProps = {};
export const TableHeader = (props: TableHeaderProps) => {
  return <WMTableHeader {...props} />;
};

export type TableBodyProps = {};
export const TableBody = (props: TableBodyProps) => {
  return <WMTableBody {...props} />;
};

export type TableRowProps = {};
export const TableRow = (props: TableRowProps) => {
  return <WMTableRow {...props} />;
};

export type TableCellProps = {};
export const TableCell = (props: TableCellProps) => {
  return <WMTableCell {...props} />;
};

export type TableFooterProps = {};
export const TableFooter = (props: TableFooterProps) => {
  return <WMTableFooter {...props} />;
};
