const tabs = [
  {
    value: `search`,
    text: "بحث",
  },
  {
    value: `myMeals`,
    text: "وجباتي",
  },
];

export default function DietTabs({ handleActiveTab, activeTab }) {
  return (
    <div className="my-4 flex justify-center gap-[10px] sm:justify-start">
      {tabs?.map((tab) => (
        <span
          key={tab.value}
          onClick={() => handleActiveTab(tab.value)}
          className={`w-full cursor-pointer break-words rounded-md border px-[10px] py-[5px] text-center font-bold text-[#ffffffff] transition-all sm:w-[80px] ${
            activeTab === tab.value
              ? "border-primary bg-primary text-bg_color"
              : "bg-transparent"
          }`}
        >
          {tab.text}
        </span>
      ))}
    </div>
  );
}
