import HealthTable from "./HealthTable";

const data = [
  {
    date: "1/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },

  {
    date: "2/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },

  {
    date: "3/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },

  {
    date: "4/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },

  {
    date: "5/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },

  {
    date: "6/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },
  {
    date: "7/1/2024",
    day: "اليوم",
    weight: "الوزن",
    caloriesConsumed: "-",
    consumedProteins: "-",
    carpConsumption: "-",
    fatsConsumed: "-",
    averageSleep: "-",
    sleepQualityIsAverage: "",
    mediumTension: "-",
    averageStress: "-",
    drinkingWaterIsAverage: "-",
    stepsAverage: "-",
    hungerIsAverage: "-",
    howIsYourWorkout: "-",
    menstrualProblems: "-",
  },
];

function HealthNotificationSection() {
  return (
    <div className="bg-bg_color p-[20px]">
      <HealthTable data={data} />
    </div>
  );
}

export default HealthNotificationSection;
