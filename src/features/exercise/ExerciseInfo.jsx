import { Link } from "react-router-dom";
import image from "../../assets/exerciseEx.png";
import Button from "../../ui/Button";

const examples = [
  {
    title: "الاول",
  },

  {
    title: "الثاني",
  },

  {
    title: "الثالث",
  },

  {
    title: "الرابع",
  },
];

function ExerciseInfo({ onCloseModal }) {
  return (
    <div className="p-[10px]">
      <div className="flex items-center justify-center gap-[20px] text-[20px] font-[700] leading-[24px] md:text-[32px]">
        <h1>اسم التمرينه</h1>
        <img src={image} alt="" />
      </div>

      <ul className="list-disc space-y-[10px]">
        {examples?.map((ex) => {
          return (
            <li key={ex.title} className="md:text-[20px]">
              {ex.title}
            </li>
          );
        })}
      </ul>

      <div className="my-[20px]">Vidoe</div>
      <Link to={"/exercise/details"}>
        <Button variant="tertiary">ابدا الان</Button>
      </Link>
    </div>
  );
}

export default ExerciseInfo;
