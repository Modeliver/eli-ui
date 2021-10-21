import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Windmill } from "@windmill/react-ui";

import { Input } from "../inputs/Input";

export default {
  title: "Example/Input",
  component: Input,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Input type="text" aria-label="FirstName" placeholder="First name" valid />
  </Windmill>
);

export const Default = Template.bind({});
