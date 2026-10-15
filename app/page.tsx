import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Barbers from "@/components/Barbers";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Barbers />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
