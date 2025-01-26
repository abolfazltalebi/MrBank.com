import { AppServices } from "../../constants/AppServices";
import OneApp from "../../assets/images/app.webp";

export default function AppServiceSection() {
  return (
    <section className=" grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center">
      <div>
        <img src={OneApp} className="" alt="" />
      </div>
      <div className="space-y-10">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          One app. <br />
          One banking.
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {AppServices.map((Aitem) => {
            return (
              <div
                className="border-2 border-neutral-100 rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-neutral-300 hover:translate-1"
                key={Aitem.id}
              >
                <div>
                  <img src={Aitem.icon} alt={Aitem.title} />
                </div>
                <h2 className="text-sm sm:text-lg font-medium">
                  {Aitem.title}
                </h2>
                <p className="text-xs text-justify break-normal">
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
