import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Alert } from "../alerts/Alert";
import { Windmill } from "@windmill/react-ui";

export default {
  title: "Example/Alert",
  component: Alert,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Alert>Default alert</Alert>
    <Alert type="warning">Warning message</Alert>
    <Alert type="success">Success message</Alert>
  </Windmill>
);

export const Default = Template.bind({});
