import { useParams } from "react-router-dom";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import SingleMealHead from "./SingleMealHead";
import SingleMealDetails from "./SingleMealDetails";

function SingleMeal() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="py-[30px]">
      <Container>
        <div className="relative space-y-10 rounded-lg bg-bg_color p-5 text-white">
          <SingleMealHead />
          <SingleMealDetails />
          <Button>اختيار الوجبه</Button>
        </div>
      </Container>
    </div>
  );
}

export default SingleMeal;
