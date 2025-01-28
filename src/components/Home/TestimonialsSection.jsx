import TestimonialsTitle from "./TestimonialsTitle";
import TestimonialsItems from "./TestimonialsItems";

export default function TestimonialsSection() {
  return (
    <section className="px-6 sm:px-12 md:px-32 space-y-8">
      <TestimonialsTitle />
      <TestimonialsItems />
    </section>
  );
}
