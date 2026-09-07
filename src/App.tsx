import { ContactForm } from "./components/ContactForm/ContactForm";
import { ExpertiseGrid } from "./components/ExpertiseGrid/ExpertiseGrid";
import { ExpertiseSection } from "./components/ExpertiseSection/ExpertiseSection";
import { PhotoGallery } from "./components/ExpertiseSection/PhotoGallery/PhotoGallery";
import FooterSection from "./components/FooterSection/FooterSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MapSection from "./components/MapSection/MapSection";
import { PartnerLogos } from "./components/PartnerLogos/PartnerLogos";
import { SearchListings } from "./components/SearchListings/SearchListings";
import { SocialsSection } from "./components/SocialsSection/SocialsSection";
import { ActiveSectionProvider } from "./contenxt/ActiveSectionContext";

function App() {

  return (
    <ActiveSectionProvider>
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <PartnerLogos />
      <ExpertiseGrid />
      <SocialsSection />
      <SearchListings />
      <PhotoGallery />
      <ContactForm />
      {/* <GoogleMap apiKey={"AIzaSyCejsMC4TkSLrZcXL8_stej1ek9WB5SWwA"} center={{ lat: 0, lng: 0 }} zoom={5} />  */}
      <MapSection apiKey="AIzaSyCejsMC4TkSLrZcXL8_stej1ek9WB5SWwA" center={{ lat: 36.2081, lng: -115.9922 }} zoom={10} />
      <FooterSection />
    </ActiveSectionProvider>
  )
}

export default App
