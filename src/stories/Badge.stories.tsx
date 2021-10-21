import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Windmill } from "@windmill/react-ui";

import { Badge } from "../badges/Badge";

export default {
  title: "Example/Badge",
  component: Badge,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Badge>Default badge</Badge>
    <Badge type="warning">Warning badge</Badge>
    <Badge type="success">Success badge</Badge>
  </Windmill>
);

export const Default = Template.bind({});
