import FeatureSection from "@/components/Sections/FeatureSection";
import Heropage from "../components/Sections/HeroSection";
import PlatformSection from "@/components/Sections/Platform";

const Homepage = () => {
  return (
    <>
      <Heropage />
      <PlatformSection />
      <FeatureSection />
    </>
  );
};

export default Homepage;
