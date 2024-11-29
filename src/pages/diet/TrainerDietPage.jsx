import DietCalendar from "../../features/diet/DietCalendar";
import MealsChart from "../../features/diet/MealsChart";
import TrainerMealsList from "../../features/diet/TrainerMealsList";
import Container from "../../ui/Container";

function TrainerDietPage() {
  return (
    <>
      <DietCalendar />
      <Container>
        <div className="relative flex flex-col-reverse gap-[10px] py-[20px] text-[#fff] md:flex-row">
          <TrainerMealsList />
          <MealsChart />
        </div>
      </Container>
    </>
  );
}

export default TrainerDietPage;
