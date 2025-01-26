import CheckIcon from "../../assets/images/icons/check.svg";
import { CompanyItem } from "../../constants/CompanyItem";

export default function SendReceiveSection() {
  return (
    <section className="pt-24 bg-[#E8F2EE]">
      <div className="px-12 sm:px-32 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-6xl font-bold">Send & receive money instantly</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="flex  flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="" />
              <p className="text-sm font-medium">Malesuada Ipsum</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="" />
              <p className="text-sm font-medium">Malesuada Ipsum</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="" />
              <p className="text-sm font-medium">Malesuada Ipsum</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 h-[500px] overflow-y-hidden">
          {CompanyItem.map((Citem) => {
            return (
              <div
                className="bg-white p-3 rounded-2xl flex items-center justify-between transition-all duration-300 hover:scale-95"
                key={Citem.id}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <img src={Citem.icon} alt="" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium">{Citem.title}</h2>
                    <p className="text-xs font-normal text-muted">
                      {Citem.description}
                    </p>
                  </div>
                </div>
                <div>
                  <p>{Citem.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
