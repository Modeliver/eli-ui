import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "../buttons/Button";
import { Windmill } from "@windmill/react-ui";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Button title="Sample" size="small" {...args} />
  </Windmill>
);

export const Default = Template.bind({});
