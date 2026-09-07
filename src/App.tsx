import { ExpertiseGrid } from "./components/ExpertiseGrid/ExpertiseGrid";
import { ExpertiseSection } from "./components/ExpertiseSection/ExpertiseSection";
import { PhotoGallery } from "./components/ExpertiseSection/PhotoGallery/PhotoGallery";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { ActiveSectionProvider } from "./contenxt/ActiveSectionContext";

function App() {

  return (
    <ActiveSectionProvider>
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <ExpertiseGrid />
      <PhotoGallery />
    </ActiveSectionProvider>
  )
}

export default App
