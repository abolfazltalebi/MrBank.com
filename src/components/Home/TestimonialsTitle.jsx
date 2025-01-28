import { FaStar } from "react-icons/fa";
export default function TestimonialsTitle() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
      <div className="w-full md:w-2/3 space-y-4">
        <p className="text-sm text-muted">Testimonials</p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          People all over the world use banko.
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center bg-[#E8F2EE] text-primary rounded-full">
          <FaStar />
        </div>
        <p className="text-sm text-muted">
          Rated <strong className="font-semibold text-primary">4.8/5</strong>{" "}
          from over 1000 users
        </p>
      </div>
    </div>
  );
}
