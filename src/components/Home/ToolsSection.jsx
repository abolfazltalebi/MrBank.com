import logo1 from "../../assets/images/icons/logo-1.svg";
import logo2 from "../../assets/images/icons/logo-2.svg";
import logo3 from "../../assets/images/icons/logo-3.svg";
import logo4 from "../../assets/images/icons/logo-4.svg";
import logo5 from "../../assets/images/icons/logo-5.svg";
import logo6 from "../../assets/images/icons/logo-6.svg";
import logo7 from "../../assets/images/icons/logo-7.svg";
import logo8 from "../../assets/images/icons/logo-8.svg";
import logo9 from "../../assets/images/icons/logo-9.svg";
import checkIcon from "../../assets/images/icons/check.svg";

import LogoGrid from "./LogoGrid.";
import ContentSection from "./ContentSection";
export default function ToolsSection() {
  const logoItems = [
    { id: 1, image: logo1 },
    { id: 2, image: logo2 },
    { id: 3, image: logo3 },
    { id: 4, image: logo4 },
    { id: 5, image: logo5 },
    { id: 6, image: logo6 },
    { id: 7, image: logo7 },
    { id: 8, image: logo8 },
    { id: 9, image: logo9 },
  ];

  const checkItems = [
    { id: 1, src: checkIcon, title: "Secure and encrypted integration" },
    { id: 2, src: checkIcon, title: "Fully API interface" },
    { id: 3, src: checkIcon, title: "Payments worldwide" },
  ];

  return (
    <section className="px-12 sm:px-32 border-b border-neutral-100 pt-14 space-y-14">
      <LogoGrid logoItems={logoItems} />
      <ContentSection checkItems={checkItems} />
    </section>
  );
}
