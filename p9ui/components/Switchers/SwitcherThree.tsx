"use client";
import {useState} from "react";
import * as Icon from "@heroicons/react/24/outline";

const SwitcherThree = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <label
        htmlFor="toggle3"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggle3"
            className="sr-only"
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              enabled && "!right-1 !translate-x-full !bg-primary dark:!bg-white"
            }`}
          >
            <span className={`hidden ${enabled && "!block"} text-white dark:text-black`}>
              <Icon.CheckIcon className={"w-4 h-4"} />
            </span>
            <span className={`${enabled && "hidden"}`}>
              <Icon.XMarkIcon className={"w-4 h-4"} />
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherThree;
