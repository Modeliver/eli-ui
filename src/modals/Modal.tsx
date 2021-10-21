import React from "react";
import {
  Modal as WMModal,
  ModalHeader as WMModalHeader,
  ModalBody as WMModalBody,
  ModalFooter as WMModalFooter,
} from "@windmill/react-ui";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const Modal = ({ isOpen, onClose, ...props }: ModalProps) => {
  return <WMModal isOpen onClose={onClose} {...props} />;
};

type ModalBodyProps = {};
export const ModalBody = (props: ModalBodyProps) => {
  return <WMModalBody {...props} />;
};
type ModalHeaderProps = {};
export const ModalHeader = (props: ModalHeaderProps) => {
  return <WMModalHeader {...props} />;
};

type ModalFooterProps = {};
export const ModalFooter = (props: ModalFooterProps) => {
  return <WMModalFooter {...props} />;
};
