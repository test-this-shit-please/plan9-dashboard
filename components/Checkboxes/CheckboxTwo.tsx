"use client";
import {useState} from "react";
import {CheckIcon} from "@heroicons/react/24/outline";

const CheckboxTwo = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabelTwo"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelTwo"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && "border-primary bg-gray dark:bg-transparent"
            }`}
          >
            <span className={`opacity-0 ${isChecked && "!opacity-100"} text-primary`}>
              <CheckIcon className={'w-3.5 h-3.5'} strokeWidth={2.5} />
            </span>
          </div>
        </div>
        Checkbox Text
      </label>
    </div>
  );
};

export default CheckboxTwo;
