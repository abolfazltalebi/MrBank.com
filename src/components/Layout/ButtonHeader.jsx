import { Link } from "react-router-dom";

export default function ButtonHeader() {
  return (
    <div className=" flex flex-wrap sm:flex-nowrap  items-center justify-center w-full  gap-4">
      <Link to={"/login"} className=" cursor-pointer">
        <button className="text-primary px-6 py-4 font-bold text-sm">Login</button>
      </Link>
      <Link to={"/Dashboard"} className=" cursor-pointer">
        <button className="bg-primary text-white rounded-xl px-6 py-4  text-sm">
          Open Account
        </button>
      </Link>
    </div>
  );
}
