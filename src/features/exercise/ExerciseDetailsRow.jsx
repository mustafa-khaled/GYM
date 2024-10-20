import { FaCheck } from "react-icons/fa6";
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";

import Table from "../../ui/Table";
import EditWeight from "./EditWeight";

function ExerciseDetailsRow({ item }) {
  return (
    <Table.Row key={item?.id}>
      <Table.Cell>
        <PiDotsThreeCircleVerticalLight className="text-2xl text-primary" />
      </Table.Cell>
      <Table.Cell>-</Table.Cell>
      <Table.Cell>
        <span className="flex w-full items-center justify-center bg-[#909090] p-[10px] text-[#000]">
          --
        </span>
      </Table.Cell>
      <Table.Cell>
        <EditWeight weight={11} />
      </Table.Cell>
      <Table.Cell>
        <p className="flex w-full items-center gap-[5px] text-[#000]">
          <span className="block w-full bg-[#909090] p-[10px]">8</span>
          <span className="block w-full bg-primary p-[10px]">10</span>
          <span className="block w-full bg-[#909090] p-[10px]">12</span>
        </p>
      </Table.Cell>
      <Table.Cell>
        <span className="flex w-full items-center justify-center rounded-md border border-primary bg-bg_color p-[8px] text-primary">
          <FaCheck className="text-xl" />
        </span>
      </Table.Cell>
    </Table.Row>
  );
}

export default ExerciseDetailsRow;
