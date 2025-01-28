import AppServiceSection from "./AppServiceSection";
import CardShowcase from "./CardShowcase";
import HeroSection from "./HeroSection";
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
    </>
  );
}
