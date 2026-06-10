import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Fleet from "@/components/Fleet";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import DriverApply from "@/components/DriverApply";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <AboutUs />
      <Fleet />
      <Stats />
      <Partners />
      <DriverApply />
      <Footer />
    </main>
  );
}
