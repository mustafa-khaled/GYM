import image from "../assets/hero_section_home.jpg";
import MealsChart from "../features/diet/MealsChart";
import MealsList from "../features/diet/MealsList";
import Container from "../ui/Container";

function Diet() {
  return (
    <section
      className="relative min-h-[calc(100vh-64px)]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "50% 40%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="fixed left-0 top-0 h-[100vh] w-full bg-gradient-to-br from-black/10 to-[#240101]" />
      <Container>
        <div className="relative flex flex-col-reverse gap-[10px] py-[20px] text-[#fff] md:flex-row">
          <MealsList />
          <MealsChart />
        </div>
      </Container>
    </section>
  );
}

export default Diet;
