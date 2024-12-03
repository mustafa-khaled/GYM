import { FaCirclePlus } from "react-icons/fa6";
import { AiFillMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { useEditRound } from "../../queries/useEditRound";

const keyStyles =
  "flex h-[64px] items-center justify-center bg-[#909090] text-[#000] cursor-pointer";

function EditWeightKeyboard({ item, onCloseModal }) {
  const { editRound } = useEditRound();

  const [currentWeight, setCurrentWeight] = useState(item?.weight || 0);

  const handleKeyClick = (keyValue) => {
    if (keyValue === "+") {
      setCurrentWeight((prevWeight) => prevWeight + 1);
      return;
    }
    if (keyValue === "-" && currentWeight > 0) {
      setCurrentWeight((prevWeight) => prevWeight - 1);
      return;
    }
    if (typeof keyValue === "number") {
      setCurrentWeight(keyValue);
    }
  };

  function handleChangeWeight() {
    const finalData = {
      repeat: item?.repeat,
      weight: currentWeight,
      set: item?.set,
      note: item?.note,
    };
    editRound(
      {
        roundId: item?.id,
        finalData,
      },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }

  return (
    <div className="pt-[10px] text-[20px] font-[600] leading-[24px]">
      <div className={keyStyles}>{currentWeight}</div>

      <div className="mt-[5px] grid grid-cols-4 gap-[5px]">
        <div className={`${keyStyles} bg-primary`} onClick={handleChangeWeight}>
          تم
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(3)}>
          3
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(2)}>
          2
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(1)}>
          1
        </div>
      </div>

      <div className="mt-[5px] grid grid-cols-4 gap-[5px]">
        <div className={keyStyles} onClick={() => handleKeyClick("+")}>
          <FaCirclePlus />
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(6)}>
          6
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(5)}>
          5
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(4)}>
          4
        </div>
      </div>

      <div className="mt-[5px] grid grid-cols-4 gap-[5px]">
        <div className={keyStyles} onClick={() => handleKeyClick("-")}>
          <AiFillMinusCircle />
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(9)}>
          9
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(8)}>
          8
        </div>
        <div className={keyStyles} onClick={() => handleKeyClick(7)}>
          7
        </div>
      </div>

      <div className="mt-[5px] grid grid-cols-2 gap-[5px]">
        <div className={`${keyStyles} bg-primary`}>نسخ من الجوله السابقه</div>
        <div className={`${keyStyles} gap-[5px] !bg-[#000]`}>
          <div
            className={`${keyStyles} w-full`}
            onClick={() => handleKeyClick(0)}
          >
            0
          </div>
          <div
            className={`${keyStyles} w-full`}
            onClick={() => handleKeyClick(0)}
          >
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWeightKeyboard;
