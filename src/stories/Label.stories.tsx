import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Windmill } from "@windmill/react-ui";

import { Input } from "../inputs/Input";
import { Label } from "../labels/Label";

export default {
  title: "Example/Label",
  component: Label,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Label radio>
      <Input type="radio" />
      <span className="ml-2">Radio label</span>
    </Label>
  </Windmill>
);

export const Default = Template.bind({});
