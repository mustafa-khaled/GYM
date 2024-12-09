import Choose from "../../ui/Choose";

function TableTitle() {
  return (
    <div className="mb-[20px] flex items-center justify-between gap-[15px] sm:justify-start">
      <h2 className="font-[700] leading-[24px] md:text-[20px]">
        متابعه التطور
      </h2>
      <div className="flex w-[180px] flex-col items-center gap-[10px] sm:flex-row">
        <Choose
          options={[{ value: 1, label: "الاسبوع الحالي" }]}
          placeholder="-- اختر --"
        />
      </div>
    </div>
  );
}

export default TableTitle;
