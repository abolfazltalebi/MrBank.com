import ButtonHeader from "../ButtonHeader";
import { HeaderItem } from "../../../constants/HeaderItem";
import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 back z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white/80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-screen p-6">
          <ul className="flex flex-col gap-4">
            {HeaderItem.map((Hitem) => (
              <li key={Hitem.id} className="font-bold text-black text-md">
                <Link
                  to={Hitem.src}
                  className="transition-all duration-300 hover:text-orangee"
                  onClick={onClose}
                >
                  {Hitem.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-2">
            <Link to={"/login"} className=" cursor-pointer">
              <button className="text-primary px-6 py-4 font-bold text-sm">
                Login
              </button>
            </Link>
            <Link to={"/Dashboard"} className=" cursor-pointer">
              <button className="bg-primary text-white rounded-xl px-6 py-4  text-sm">
                Open Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
