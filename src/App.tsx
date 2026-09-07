import { ExpertiseSection } from "./components/ExpertiseSection/ExpertiseSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { ActiveSectionProvider } from "./contenxt/ActiveSectionContext";

function App() {

  return (
    <ActiveSectionProvider>
      <Header />
      <HeroSection />
      <ExpertiseSection />
    </ActiveSectionProvider>
  )
}

export default App
