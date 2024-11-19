import DietCalendar from "../features/diet/DietCalendar";
import MealsChart from "../features/diet/MealsChart";
import MealsList from "../features/diet/MealsList";
import Container from "../ui/Container";
import MainSection from "../ui/MainSection";

function Diet() {
  return (
    <MainSection styles="">
      <DietCalendar />
      <Container>
        <div className="relative flex flex-col-reverse gap-[10px] py-[20px] text-[#fff] md:flex-row">
          <MealsList />
          <MealsChart />
        </div>
      </Container>
    </MainSection>
  );
}

export default Diet;
