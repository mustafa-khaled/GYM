import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchForMeal } from "../../queries/useSearchForMeal";
import { useAddNewMeal } from "../../queries/useAddNewMeal";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import SingleMealHead from "./SingleMealHead";
import SingleMealDetails from "./SingleMealDetails";

function SingleMeal() {
  const { id } = useParams();
  const { searchData } = useSearchForMeal();
  const [quantity, setQuantity] = useState(1);
  const { addNewMeal, isLoading } = useAddNewMeal();
  const selectedMeal = searchData?.find((meal) => meal?.id === parseInt(id));

  const updateQuantity = (action) => {
    setQuantity((prevQuantity) => {
      if (action === "add") {
        return prevQuantity + 1;
      } else if (action === "subtract" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="py-[30px]">
      <Container>
        <div className="relative space-y-12 rounded-lg bg-bg_color p-5 text-white">
          <SingleMealHead updateQuantity={updateQuantity} quantity={quantity} />
          <SingleMealDetails />
          <Button disabled={isLoading}>اختيار الوجبه</Button>
        </div>
      </Container>
    </div>
  );
}

export default SingleMeal;
