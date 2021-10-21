import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Windmill } from "@windmill/react-ui";
import { Textarea } from "../textareas/Textarea";

export default {
  title: "Example/TextArea",
  component: Textarea,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Textarea
      valid={false}
      rows="3"
      placeholder="Enter some long form content."
    />
  </Windmill>
);

export const Default = Template.bind({});
