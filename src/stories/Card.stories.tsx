import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardBody } from "../cards/Card";
import { Windmill } from "@windmill/react-ui";

export default {
  title: "Example/Cards and CardBody",
  component: Card,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Card>
      <CardBody>
        <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
          Header
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </p>
      </CardBody>
    </Card>
  </Windmill>
);

export const Default = Template.bind({});
