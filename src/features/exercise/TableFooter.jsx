import Button from "../../ui/Button";
import AddEditRoundModal from "./AddEditRoundModal";

function TableFooter() {
  return (
    <div className="mt-[20px] flex flex-col gap-[10px] md:flex-row">
      <Button variant="tertiary">اتمام التمرينه</Button>
      <div className="flex w-full gap-[10px]">
        <AddEditRoundModal>
          <Button
            variant="tertiary"
            styles={"!bg-[#000] text-primary border-primary border"}
          >
            اضافه جوله
          </Button>
        </AddEditRoundModal>

        <Button
          variant="tertiary"
          styles={"!bg-[#000] text-primary border-primary border"}
        >
          اضافه تمرينه
        </Button>
      </div>
    </div>
  );
}

export default TableFooter;
