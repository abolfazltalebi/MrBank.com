import { Link } from "react-router-dom";
import heroSection from "../../assets/images/heroSection.webp";

export default function HeroSection() {
  return (
    <section className=" flex gap-4 items-center justify-between">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          MrBank <br />
          is a new experience..
        </h2>
        <p className="text-xs font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
        <div className="flex items-center">
          <Link to={"/Dashboard"} className="cursor-pointer">
            <button className="bg-primary cursor-pointer text-white rounded-xl px-6 py-4  text-sm">
              Open Account
            </button>
          </Link>
          <Link to={"/login"} className=" cursor-pointer">
            <button className="text-primary cursor-pointer px-6 py-4 font-bold text-sm">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={heroSection} className="" alt="" />
      </div>
    </section>
  );
}
