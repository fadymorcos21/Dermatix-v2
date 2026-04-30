import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Signature from "@/components/Signature";
import Experience from "@/components/Experience";
import Editorial from "@/components/Editorial";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Philosophy />
      <Services />
      {/* <Signature /> */}
      <Experience />
      <CTA />
      <Testimonials />
      <Location />
      <Editorial />
      <Footer />
    </main>
  );
}
