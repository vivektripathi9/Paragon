import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Difference from "@/components/Difference";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Reputation from "@/components/Reputation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Difference />
      <Services />
      <Process />
      <Reputation />
      <Footer />
    </div>
  );
}
