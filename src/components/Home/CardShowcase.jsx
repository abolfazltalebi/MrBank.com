import { Link } from "react-router-dom";
import cardImage from "../../assets/images/cards (1).webp";
export default function CardShowcase() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="space-y-4">
        <p className="text-sm text-muted text-center">Account</p>
        <h2 className="text-xl sm:text-3xl md:text-6xl font-bold text-center">
          Perfect card for your needs.
        </h2>
        <p className="text-sm text-muted text-center">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      <div className="space-y-4">
        <img src={cardImage} className="size-[500px]" alt={"card image"} />
        <div className="flex items-center gap-3 justify-center">
          <Link to={"/"}>
            <button className="bg-primary px-5 py-3.5 rounded-xl text-white text-sm hover:bg-primary-dark transition duration-300">
              Open Account
            </button>
          </Link>
          <Link to={"/"}>
            <button className="bg-transparent border-2 border-neutral-200 px-5 py-3.5 rounded-xl text-black text-sm hover:bg-neutral-200 transition duration-300">
              Compare Cards
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
