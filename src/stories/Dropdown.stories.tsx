import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Dropdown, DropdownItem } from "../dropdowns/Dropdown";
import { Windmill } from "@windmill/react-ui";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Dropdown onClose={() => console.log("Close me")}>
      <DropdownItem>
        <span>Alerts</span>
      </DropdownItem>
      <DropdownItem>
        <span>Alerts</span>
      </DropdownItem>
    </Dropdown>
  </Windmill>
);

export const Default = Template.bind({});
