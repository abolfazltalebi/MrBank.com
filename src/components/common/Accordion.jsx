import { Accordion } from "@base-ui-components/react/accordion";
import { NeedHelpItem } from "../../constants/NeedHelpItem";

export default function ExampleAccordion() {
  return (
    <Accordion.Root className="flex w-full flex-col justify-center text-gray-900">
      {NeedHelpItem.map((Nitem) => {
        return (
          <Accordion.Item className="border-b border-gray-200 py-4" key={Nitem.id}>
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full cursor-pointer items-baseline justify-between gap-4 py-2 text-left font-medium focus-visible:outline-2 focus-visible:outline-blue-800">
                {Nitem.title}
                <PlusIcon className="mr-2 size-3 shrink-0 transition-all ease-out group-data-[panel-open]:scale-110 group-data-[panel-open]:rotate-45" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-gray-600 transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis
                natoque penatibus et magnis dis parturient.
              </p>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}
