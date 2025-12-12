import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PillarGrid from "./components/PillarGrid";
import ScheduleSection from "./components/ScheduleSection";
import ProgramCards from "./components/ProgramCards";
import ProjectShowcase from "./components/ProjectShowcase";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PillarGrid />
      <ScheduleSection />
      <ProgramCards />
      <ProjectShowcase />
      <Testimonials />
      <Footer />
    </div>
  );
}