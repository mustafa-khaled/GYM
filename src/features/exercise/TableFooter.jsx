import Button from "../../ui/Button";

function TableFooter() {
  return (
    <div className="mt-[20px] flex flex-col gap-[10px] md:flex-row">
      <Button variant="tertiary">ابدا الان</Button>
      <div className="flex w-full gap-[10px]">
        <Button
          variant="tertiary"
          styles={"!bg-[#000] text-primary border-primary border"}
        >
          اضافه جوله
        </Button>
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
