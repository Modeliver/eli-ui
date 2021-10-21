import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Windmill } from "@windmill/react-ui";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "../modals/Modal";
import { Button } from "../buttons/Button";

export default {
  title: "Example/Modal",
  component: Modal,
} as Meta;

const Template: Story = (args) => (
  <Windmill>
    <Modal isOpen onClose={() => console.log("Modal")}>
      <ModalHeader>Modal header</ModalHeader>
      <ModalBody>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
        eligendi repudiandae voluptatem tempore!
      </ModalBody>
      <ModalFooter>
        <Button
          className="w-full sm:w-auto"
          layout="outline"
          title="Cancel"
          onClick={() => console.log("Click button")}
        />
        <Button className="w-full sm:w-auto" title="Accept" />
      </ModalFooter>
    </Modal>
  </Windmill>
);

export const Default = Template.bind({});
