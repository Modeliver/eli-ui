import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Avatar } from "../avatars/Avatar";
import { Windmill } from "@windmill/react-ui";

export default {
  title: "Example/Avatar",
  component: Avatar,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Avatar src="assets/avatar.png" />
  </Windmill>
);

export const Default = Template.bind({});
