import Hero from "../components/home/Hero";
import Trust from "../components/home/Trust";
import AboutUs from "../components/home/AboutUs";
import Expertise from "../components/home/Expertise";
import DesignPhilosophy from "../components/home/DesignPhilosophy";
import Process from "../components/home/Process";
import CaseStudies from "../components/home/CaseStudies";
import Testimonials from "../components/home/Testimonials";
import WhyUs from "../components/home/WhyUs";
import StudioNote from "../components/home/StudioNote";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfcf9] relative">
      <Hero />
      <Trust />
      <AboutUs />
      <Expertise />
      <DesignPhilosophy />
      <Process />
      <CaseStudies />
      <Testimonials />
      <WhyUs />
      <StudioNote />
      <CTA />
    </main>
  );
}
