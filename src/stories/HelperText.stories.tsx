import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HelperText } from "../helpertexts/HelperText";
import { Windmill } from "@windmill/react-ui";

export default {
  title: "Example/HelperText",
  component: HelperText,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <HelperText>Default helpertext</HelperText>
    <HelperText valid>Valid helpertext</HelperText>
    <HelperText valid={false}>Failed helpertext</HelperText>
  </Windmill>
);

export const Default = Template.bind({});
