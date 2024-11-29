import { useState } from "react";
import { useSearchForMeal } from "../../queries/useSearchForMeal";
import Container from "../../ui/Container";
import DietTabs from "../../features/diet/DietTabs";
import InputSearch from "../../features/diet/InputSearch";
import MealsWithDetailsList from "../../features/diet/MealsWithDetailsList";

function AllMealsWithDetails() {
  const [activeTab, setActiveTab] = useState("myMeals");
  const { searchData, isSearching } = useSearchForMeal();

  const handleActiveTab = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <div className={`relative ${activeTab !== "search" && "py-2"}`}>
      {activeTab === "search" && <InputSearch />}

      <Container>
        <DietTabs handleActiveTab={handleActiveTab} activeTab={activeTab} />
        <MealsWithDetailsList meals={searchData} loading={isSearching} />
      </Container>
    </div>
  );
}

export default AllMealsWithDetails;
