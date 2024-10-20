import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

import Table from "../../ui/Table";
import ExerciseDetailsRow from "./ExerciseDetailsRow";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";

function ExerciseDetailsTable({ data }) {
  return (
    <div className="rounded-md bg-[#000] p-[10px]">
      <TableHead />
      <Table>
        <Table.Header>
          <Table.Cell isHeader>
            <PiDotsThreeCircleVerticalLight className="text-2xl text-primary" />
          </Table.Cell>
          <Table.Cell isHeader>الجولات</Table.Cell>
          <Table.Cell isHeader>التمرين السابق</Table.Cell>
          <Table.Cell isHeader>الوزن</Table.Cell>
          <Table.Cell isHeader>التكرار</Table.Cell>
          <Table.Cell isHeader>
            <span className="flex w-full items-center justify-center rounded-md bg-bg_color p-[10px] text-primary">
              <FaCheck className="text-xl" />
            </span>
          </Table.Cell>
        </Table.Header>
        <Table.Body
          data={data}
          render={(item) => <ExerciseDetailsRow item={item} key={item?.id} />}
        />
      </Table>

      <TableFooter />
    </div>
  );
}

export default ExerciseDetailsTable;
