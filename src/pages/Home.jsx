import DietSection from "../ui/home/DietSection";
import ExercisesSection from "../ui/home/ExercisesSection";
import HeroSection from "../ui/home/HeroSection";
import SubscriptionsSection from "../ui/home/SubscriptionsSection";
import TransformationsSection from "../ui/home/TransformationsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <DietSection />
      <ExercisesSection />
      <TransformationsSection />
      <SubscriptionsSection />
    </>
  );
}

export default Home;
