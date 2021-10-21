import React from "react";
import { Disclosure as HUIDisclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

type AccordionProps = {
  header: string | Element;
  content: string | Element;
  iconProps?: any;
  buttonProps?: any;
  panelProps?: any;
};

export const Accordion = ({
  header,
  content,
  iconProps,
  buttonProps,
  panelProps,
  ...props
}: AccordionProps) => {
  return (
    <HUIDisclosure {...props}>
      {({ open }) => (
        <>
          <HUIDisclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span>{header}</span>
            <ChevronUpIcon
              className={`${
                open ? "transform rotate-180" : ""
              } w-5 h-5 text-purple-500`}
              {...iconProps}
            />
          </HUIDisclosure.Button>
          <HUIDisclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            {content}
          </HUIDisclosure.Panel>
        </>
      )}
    </HUIDisclosure>
  );
};
