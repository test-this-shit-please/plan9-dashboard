import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";

import {Metadata} from "next";
import {ReactNode} from "react";
import * as Icons from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Form Elements Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Elements page for TailAdmin Next.js",
  // other metadata
};

const FormElement = ({heading, children}: { heading: string, children: ReactNode }) => (
  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
      <h3 className="font-medium text-black dark:text-white">
        {heading}
      </h3>
    </div>
    <div className="flex flex-col gap-5.5 p-6.5">
      {children}
    </div>
  </div>
)

const InputWithLabel = ({label, type, placeholder, disabled = false, inFocus = false}: {
  label: string,
  type: string,
  placeholder: string,
  disabled?: boolean,
  inFocus?: boolean
}) => (
  <div>
    <label className="mb-3 block font-medium text-black dark:text-white">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full rounded-lg border-[1.5px] ${inFocus ? "border-primary" : "border-stroke dark:border-form-strokedark"} 
      bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary 
      disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black`} />
  </div>
)

const DateInput = ({label, className = ""}: { label: string, className?: string }) => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      {label}
    </label>
    <div className="relative">
      <input
        type="date"
        className={`custom-input-date w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium 
        outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input 
        dark:focus:border-primary ${className}`}
      />
    </div>
  </div>
)

const FileInputOne = () => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      Attach file
    </label>
    <input
      type="file"
      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
    />
  </div>
)

const FileInputTwo = () => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      Attach file
    </label>
    <input
      type="file"
      className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
    />
  </div>
)

const TextareaWithLabel = ({label, placeholder, disabled = false, inFocus = false}: {
  label: string,
  placeholder: string,
  disabled?: boolean,
  inFocus?: boolean
}) => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      {label}
    </label>
    <textarea
      rows={6}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full rounded-lg border-[1.5px] ${inFocus ? "border-primary" : "border-stroke dark:border-form-strokedark"} 
      bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary 
      disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black`}
    ></textarea>
  </div>
)

const SelectInput = () => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      Select Country
    </label>
    <div className="relative z-20 bg-white dark:bg-form-input">
      <Icons.GlobeAltIcon className="absolute top-1/2 left-4 z-30 -translate-y-1/2 w-6 h-6" />
      <select
        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
        <option value="">USA</option>
        <option value="">UK</option>
        <option value="">Canada</option>
      </select>
      <Icons.ChevronDownIcon className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-5 h-5" />
    </div>
  </div>
)

const MultiSelectInput = () => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      Multiselect Dropdown
    </label>
    <div
      className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
      <div className="flex flex-wrap items-center">
                    <span
                      className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      Design
                      <span className="cursor-pointer pl-2 hover:text-danger">
                        <Icons.XMarkIcon />
                      </span>
                    </span>
        <span
          className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      Development
                      <span className="cursor-pointer pl-2 hover:text-danger">
                        <Icons.XMarkIcon />
                      </span>
                    </span>
      </div>
      <select
        name=""
        id=""
        className="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0"
      >
        <option value="">Option</option>
        <option value="">Option</option>
      </select>
      <Icons.ChevronDownIcon className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-5 h-5" />
    </div>
  </div>
)
const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="FormElements" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <FormElement heading={"Input Fields"}>
            <InputWithLabel label={"Default Input"} type={"text"} placeholder={"Default Input"} />
            <InputWithLabel label={"Active Input"} type={"text"} placeholder={"Active Input"} inFocus={true} />
            <InputWithLabel label={"Disabled label"} type={"text"} placeholder={"Disabled label"} disabled={true} />
          </FormElement>
          {/* <!-- Toggle switch input --> */}
          <FormElement heading={"Toggle switch input"}>
            <>
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </>
          </FormElement>
          {/* <!-- Time and date --> */}
          <FormElement heading={"Time and date"}>
            <DateInput label={"Date picker"} className={"custom-input-date-1"} />
            <DateInput label={"Select date"} className={"custom-input-date-2"} />
          </FormElement>
          {/* <!-- File upload --> */}
          <FormElement heading={"File upload"}>
            <FileInputOne />
            <FileInputTwo />
          </FormElement>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <FormElement heading={"Textarea Fields"}>
            <TextareaWithLabel label={"Default textarea"} placeholder={"Default textarea"} />
            <TextareaWithLabel label={"Active textarea"} placeholder={"Active textarea"} inFocus={true} />
            <TextareaWithLabel label={"Disabled textarea"} placeholder={"Disabled textarea"} disabled={true} />
          </FormElement>
          {/* <!-- Checkbox and radio --> */}
          <FormElement heading={"Checkbox and radio"}>
            <>
              <CheckboxOne />
              <CheckboxTwo />
              <CheckboxThree />
              <CheckboxFour />
              <CheckboxFive />
            </>
          </FormElement>
          {/* <!-- Select input --> */}
          <FormElement heading={"Select input"}>
            <SelectInput />
            <MultiSelectInput />
          </FormElement>
        </div>
      </div>
    </>
  );
};

export default FormElements;
