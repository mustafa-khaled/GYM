import { FaCheck } from "react-icons/fa6";
import { useCompleteRound } from "../../queries/useCompleteRound";
import ExerciseActions from "./ExerciseActions";
import EditWeight from "./EditWeight";
import Table from "../../ui/Table";

const repeats = [8, 10, 12];

function ExerciseDetailsRow({ item }) {
  const { completeRound } = useCompleteRound();

  function handleChangeRoundDone() {
    completeRound(item?.id);
  }

  return (
    <Table.Row key={item?.id}>
      <Table.Cell>
        <ExerciseActions exercise={item} />
      </Table.Cell>
      <Table.Cell>{item?.repeat}</Table.Cell>
      <Table.Cell>
        <span className="flex w-full items-center justify-center bg-[#909090] p-[10px] text-[#000]">
          --
        </span>
      </Table.Cell>
      <Table.Cell>
        {/* <EditWeight weight={11} /> */}
        <span className="flex w-full cursor-pointer items-center justify-center bg-[#909090] p-[10px] text-[#000]">
          {item?.weight}
        </span>
      </Table.Cell>
      <Table.Cell>
        <div className="flex w-full items-center gap-[5px] text-[#000]">
          {repeats.map((repeat) => (
            <span
              key={repeat}
              className={`block w-full ${
                repeat === item?.repeat ? "bg-primary" : "bg-[#909090]"
              } p-[10px]`}
            >
              {repeat}
            </span>
          ))}
        </div>
      </Table.Cell>
      <Table.Cell>
        <div
          onClick={handleChangeRoundDone}
          className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-bg_color p-[8px] text-primary"
        >
          {item?.is_done ? <FaCheck className="text-xl" /> : <span>---</span>}
        </div>
      </Table.Cell>
    </Table.Row>
  );
}

export default ExerciseDetailsRow;
