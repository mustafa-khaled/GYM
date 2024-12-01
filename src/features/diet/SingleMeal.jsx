import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAddNewMeal } from "../../queries/useAddNewMeal";
import { useMealById } from "../../queries/useMealById";
import { useUpdateMealQuantity } from "../../queries/useUpdateMealQuantity";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import SingleMealHead from "./SingleMealHead";
import SingleMealDetails from "./SingleMealDetails";

function SingleMeal() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const operation = searchParams.get("operation");

  const [quantity, setQuantity] = useState(1);
  const { addNewMeal, isLoading } = useAddNewMeal();
  const { updateMealQuantity, isUpdating } = useUpdateMealQuantity();
  const { isLoadingMeal, meal } = useMealById(id);

  const loading = isLoading || isLoadingMeal || isUpdating;

  const handleAddNewMeal = () => {
    addNewMeal({
      category_id: meal?.meal_type?.id,
      quantity,
      diet_id: meal?.id,
    });
  };

  const handleUpdateMeal = () => {
    updateMealQuantity({
      meal_id: meal?.id,
      quantity,
    });
  };

  const action = operation === "edit" ? handleUpdateMeal : handleAddNewMeal;

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
          <SingleMealHead
            mealType={meal?.meal_type?.name}
            updateQuantity={updateQuantity}
            quantity={quantity}
          />
          <SingleMealDetails />
          <Button onClick={action} disabled={loading}>
            اختيار الوجبه
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default SingleMeal;
