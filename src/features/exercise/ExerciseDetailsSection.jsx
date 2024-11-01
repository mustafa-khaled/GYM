import image from "../../assets/exerciseEx.png";
import ExerciseDetailsTable from "./ExerciseDetailsTable";

const data = [
  {
    id: 1,
  },

  {
    id: 2,
  },

  {
    id: 3,
  },
];

function ExerciseDetailsSection() {
  return (
    <div>
      <div className="my-[20px] flex items-center gap-[20px] text-[20px] font-[700] leading-[24px] md:text-[32px]">
        <h1>يوم تمرينه الرجل</h1>
        <img src={image} alt="" />
      </div>

      <ExerciseDetailsTable data={data} />
    </div>
  );
}

export default ExerciseDetailsSection;
