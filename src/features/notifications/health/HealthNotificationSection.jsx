import HealthTable from "./HealthTable";
import TableTitle from "./TableTitle";
import WeekRequirements from "./WeekRequirements";
import { IoIosArrowDown } from "react-icons/io";
import { PiNotepadBold } from "react-icons/pi";

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

const twoBtnStyles =
  "flex items-center gap-[10px] bg-[#FFFFFF] text-[#000] p-[10px] font-[600] rounded-md cursor-pointer";

function HealthNotificationSection() {
  return (
    <div className="bg-bg_color p-[20px]">
      <TableTitle />
      <WeekRequirements />
      <div className="mb-[20px] flex items-center justify-between gap-[15px] sm:justify-start">
        <h2 className="font-[700] leading-[24px] md:text-[20px]">
          متابعه التطور
        </h2>
        <div className="flex flex-col items-center gap-[10px] sm:flex-row">
          <span className={`${twoBtnStyles}`}>
            الاسبوع الحالي
            <IoIosArrowDown />
          </span>
          <span className={`${twoBtnStyles}`}>
            <PiNotepadBold />
            اضافه ملاحظه
          </span>
        </div>
      </div>

      <HealthTable data={data} />
    </div>
  );
}

export default HealthNotificationSection;
