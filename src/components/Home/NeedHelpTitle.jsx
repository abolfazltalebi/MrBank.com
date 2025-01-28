import { MdMailOutline } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function NeedHelpTitle() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl sm:text-3xl md:text-6xl font-medium">
        Need help?
      </h2>
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-[#E8F2EE] flex items-center justify-center text-primary">
          <PiPhone className="size-5" />
        </div>
        <div className="space-y-4">
          <Link to={""} className="text-sm">
            +49 176 123 456
          </Link>
          <p className="text-muted text-xs">Support Hotline</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-[#E8F2EE] flex items-center justify-center text-primary">
          <MdMailOutline className="size-5" />
        </div>
        <div className="space-y-4">
          <Link to={""} className="text-sm">
            +49 176 123 456
          </Link>
          <p className="text-muted text-xs">Support Hotline</p>
        </div>
      </div>
      <Link to={"/"}>
        <button className="text-primary text-md">Support</button>
      </Link>
    </div>
  );
}
