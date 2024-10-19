import TableTitle from "./TableTitle";
import TrainingOption from "./TrainingOption";
import WeightsDevelopmentTitle from "./WeightsDevelopmentTitle";

const options = [
  {
    title: "تمرين اليوم الاول",
    id: 1,
    data: [{ date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }],
  },

  {
    title: "تمرين اليوم الثاني",
    id: 1,
    data: [{ date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }],
  },

  {
    title: "تمرين اليوم الثالث",
    id: 1,
    data: [{ date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }],
  },

  {
    title: "تمرين اليوم الرابع",
    id: 1,
    data: [{ date: 1 }, { date: 2 }, { date: 3 }, { date: 4 }],
  },
];

function WeightsDevelopmentSection() {
  return (
    <div className="bg-bg_color p-[20px]">
      <WeightsDevelopmentTitle />
      <TableTitle />

      {options?.map((option) => {
        return (
          <TrainingOption
            key={option.id}
            title={option.title}
            data={option.data}
          />
        );
      })}
    </div>
  );
}

export default WeightsDevelopmentSection;
