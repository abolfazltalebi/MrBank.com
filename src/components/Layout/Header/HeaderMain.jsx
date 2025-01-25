// import ButtonHeader from "../ButtonHeader";

import ButtonHeader from "../ButtonHeader";
import { HeaderItem } from "../../../constants/HeaderItem";
import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <>
      <div
        id="hs-navbar-example"
        className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block md:flex items-center justify-between "
        aria-labelledby="hs-navbar-example-collapse"
      >
        <ul className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-center m-auto sm:mt-0 mb-6 sm:mb-0 sm:ps-5">
          {HeaderItem.map((Hitem) => {
            return (
              <li
                key={Hitem.id}
                className="font-medium text-default text-md px-8 py-2.5 transition-all duration-300 hover:bg-[#433bb3]  hover:text-white rounded-xl"
              >
                <Link to={Hitem.src} className=" ">
                  {Hitem.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <ButtonHeader />
        </div>
      </div>
    </>
  );
}
