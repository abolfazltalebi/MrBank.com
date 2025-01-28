import ExampleAccordion from "../common/Accordion";
import NeedHelpTitle from "./NeedHelpTitle";

export default function NeedHelpSection() {
  return (
    <section className="py-6 max-w-xl sm:max-w-3xl md:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-between">
      <NeedHelpTitle />
      <ExampleAccordion />
    </section>
  );
}
