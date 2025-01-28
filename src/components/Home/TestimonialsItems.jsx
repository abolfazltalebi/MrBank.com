import { FaStar } from "react-icons/fa";
import { Testimonials } from "../../constants/Testimonials";

export default function TestimonialsItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Testimonials.map(({ id, title, text, name, role }) => (
        <div
          className="p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          key={id}
        >
          <div className="flex items-center gap-1 text-primary">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div className="space-y-4 mt-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted break-words">{text}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs text-muted">{role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
