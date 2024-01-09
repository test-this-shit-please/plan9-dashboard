"use client";
import {useState} from 'react';
import {XMarkIcon} from "@heroicons/react/24/outline";

const CheckboxThree = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabelThree"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelThree"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`text-primary opacity-0 ${
                isChecked && '!opacity-100'
              }`}
            >
              <XMarkIcon className={'w-3.5 h-3.5'} strokeWidth={2.5} />
            </span>
          </div>
        </div>
        Checkbox Text
      </label>
    </div>
  );
};

export default CheckboxThree;
