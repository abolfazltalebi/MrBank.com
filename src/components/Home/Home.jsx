import AppServiceSection from "./AppServiceSection";
import HeroSection from "./HeroSection";
import SavingAccountsSection from "./SavingAccountsSection";
import SendReceiveSection from "./SendReceiveSection";
import ToolsSection from "./ToolsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AppServiceSection />
      <SendReceiveSection />
      <SavingAccountsSection />
      <ToolsSection />
    </>
  );
}
