import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Disclosure } from "../accordions/Accordion";

export default {
  title: "Example/Disclosure",
  component: Disclosure,
} as Meta;

const Template: Story = (args) => (
  <Disclosure header={"Header"} content={"Content body"} />
);

export const Default = Template.bind({});
