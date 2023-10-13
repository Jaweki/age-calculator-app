import { ChangeEvent, FormEvent, useState } from "react";
import {
  calculateAge,
  checkForEmptyInputs,
  validateDate,
  validateInputsLimits,
} from "../utils/validator";

const InputForm = () => {
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [emptyInputs, setEmptyInputs] = useState([""]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(input.day, input.month, input.year);

    const day = Number(input.day);
    const month = Number(input.month);
    const year = Number(input.year);

    const { validityStatus_1, invalidInputs_1 } = checkForEmptyInputs({
      day,
      month,
      year,
    });

    if (!validityStatus_1) {
      setEmptyInputs(invalidInputs_1);
      return;
    }

    const { validityStatus_2, invalidInputs_2 } = validateInputsLimits({
      day,
      month,
      year,
    });

    if (!validityStatus_2) {
      setEmptyInputs(invalidInputs_2);
      return;
    }

    const { validityStatus_3, invalidInputs_3 } = validateDate({
      day,
      month,
      year,
    });

    if (!validityStatus_3) {
      setEmptyInputs(invalidInputs_3);
      return;
    }

    calculateAge({ day, month, year });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!isNaN(+value)) {
      setInput({ ...input, [name]: value });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-mobile:p-2 flex flex-col gap-10 max-mobile:gap-14"
      autoComplete="off"
    >
      <div className="font-poppins font-700 flex flex-row gap-4 max-mobile:gap-1">
        <label className="flex flex-col relative w-[120px]">
          <span
            id="day"
            className={`text-sm font-bold ${
              emptyInputs.includes("day")
                ? "text-primary-lightRed"
                : " text-neutral-smokeyGrey "
            }`}
          >
            DAY
          </span>
          <input
            id="day"
            type="text"
            name="day"
            value={input.day}
            onChange={handleInputChange}
            className={`w-[120px] h-[50px] focus:outline-primary-purple border p-3 max-mobile:w-[85px] max-mobile:p-2 font-bold text-2xl max-mobile:text-[25px] rounded-lg ${
              emptyInputs.includes("day")
                ? " border-primary-lightRed "
                : " border-neutral-lightGrey "
            }`}
            placeholder="DD"
          />
          <span
            id="dayWarn"
            className={`${
              emptyInputs.includes("day")
                ? "text-[10px] text-primary-lightRed absolute z-20 bottom-[-15px] max-mobile:bottom-[-30px]"
                : " hidden"
            }`}
          >
            {/* Warning */} {""}
          </span>
        </label>
        <label className="flex flex-col relative w-[120px]">
          <span
            id="month"
            className={`text-sm font-bold ${
              emptyInputs.includes("month")
                ? "text-primary-lightRed"
                : " text-neutral-smokeyGrey "
            }`}
          >
            MONTH
          </span>
          <input
            id="month"
            type="text"
            name="month"
            value={input.month}
            onChange={handleInputChange}
            className={`w-[120px] h-[50px] focus:outline-primary-purple border p-3 max-mobile:w-[85px] max-mobile:p-2 font-bold text-2xl max-mobile:text-[25px] rounded-lg ${
              emptyInputs.includes("month")
                ? " border-primary-lightRed "
                : " border-neutral-lightGrey "
            }`}
            placeholder="MM"
          />
          <span
            id="monthWarn"
            className={`${
              emptyInputs.includes("month")
                ? "text-[10px] text-primary-lightRed absolute z-20 bottom-[-15px] max-mobile:bottom-[-30px]"
                : " hidden"
            }`}
          >
            {/* Warning */} {""}
          </span>
        </label>
        <label className="flex flex-col relative w-[120px]">
          <span
            id="year"
            className={`text-sm font-bold ${
              emptyInputs.includes("year")
                ? "text-primary-lightRed"
                : " text-neutral-smokeyGrey "
            }`}
          >
            YEAR
          </span>
          <input
            id="year"
            type="text"
            name="year"
            value={input.year}
            onChange={handleInputChange}
            className={`w-[120px] h-[50px] focus:outline-primary-purple border p-3 max-mobile:w-[85px] max-mobile:p-2 font-bold text-2xl max-mobile:text-[25px] rounded-lg ${
              emptyInputs.includes("year")
                ? " border-primary-lightRed "
                : " border-neutral-lightGrey "
            }`}
            placeholder="YYYY"
          />
          <span
            id="yearWarn"
            className={`${
              emptyInputs.includes("year")
                ? "text-[10px] text-primary-lightRed absolute z-20 bottom-[-15px] max-mobile:bottom-[-30px]"
                : " hidden"
            }`}
          >
            {/* Warning */} {""}
          </span>
        </label>
      </div>

      <div className="relative w-full">
        <div className="w-[79%] h-[1px] bg-neutral-lightGrey max-mobile:w-full" />
        <button
          type="submit"
          className="w-[50px] h-[50px] flex justify-center items-center absolute top-[-25px] left-[79%] bg-primary-purple rounded-full max-mobile:left-[40%] "
        >
          <img
            src="/images/icon-arrow.svg"
            alt="arrow button icon"
            width={30}
            height={30}
          />
        </button>
      </div>
    </form>
  );
};

export default InputForm;
