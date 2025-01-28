import AppServiceSection from "./AppServiceSection";
import CardShowcase from "./CardShowcase";
import DownloadSection from "./DownloadSection";
import HeroSection from "./HeroSection";
import NeedHelpSection from "./NeedHelpSection";
import SavingAccountsSection from "./SavingAccountsSection";
import SendReceiveSection from "./SendReceiveSection";
import TestimonialsSection from "./TestimonialsSection";
import ToolsSection from "./ToolsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AppServiceSection />
      <SendReceiveSection />
      <SavingAccountsSection />
      <ToolsSection />
      <CardShowcase />
      <TestimonialsSection />
      <DownloadSection />
      <NeedHelpSection />
    </>
  );
}
