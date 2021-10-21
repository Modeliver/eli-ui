import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Alert } from "../alerts/Alert";
import { Windmill } from "@windmill/react-ui";
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Pagination,
  TableFooter,
} from "../tables";
import { Badge } from "..";
export default {
  title: "Example/Table",
  component: Table,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="text-sm">$ 534.87</span>
            </TableCell>
            <TableCell>
              <Badge type="success">success</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableFooter>
        <Pagination
          totalResults={10}
          resultsPerPage={4}
          onChange={() => {}}
          label="Table navigation"
        />
      </TableFooter>
    </TableContainer>
  </Windmill>
);

export const Default = Template.bind({});
