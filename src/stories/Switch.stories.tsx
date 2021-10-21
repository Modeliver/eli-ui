import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Switch } from "../switch/Switch";

export default {
  title: "Example/Switch",
  component: Switch,
} as Meta;

const Template: Story = (args) => (
  <Switch
    checked={false}
    onChange={() => console.log("Checked")}
    className={
      "bg-blue-600 relative inline-flex items-center h-6 rounded-full w-11"
    }
  >
    <span className="sr-only">Enable notifications</span>
    <span
      className={
        "translate-x-1 inline-block w-4 h-4 transform bg-white rounded-full"
      }
    />
  </Switch>
);

export const Default = Template.bind({});
