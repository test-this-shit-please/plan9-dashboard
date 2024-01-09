import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import {Metadata} from "next";
import React, {ReactNode} from "react";
import * as Icons from "@heroicons/react/24/outline";
import {CheckIcon} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for TailAdmin Next.js",
  // other metadata
};

const Form = ({title, children, btnTitle}: { title: string, children: ReactNode, btnTitle: string }) => (
  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
      <h3 className="font-medium text-black dark:text-white">
        {title}
      </h3>
    </div>
    <form action="#">
      <div className="p-6.5">
        {children}
        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
          {btnTitle}
        </button>
      </div>
    </form>
  </div>
)

const FormInput = ({label, type, placeholder}: {
  label: string | ReactNode,
  type: string,
  placeholder: string,
}) => (
  <div>
    <label className="mb-2.5 block text-black dark:text-white">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
    </div>
  </div>
)

const SelectInput = () => (
  <div>
    <label className="mb-3 block text-black dark:text-white">
      Subject
    </label>
    <div className="relative z-20 bg-white dark:bg-form-input">
      <select
        className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
        <option value="">Type your subject</option>
        <option value="">USA</option>
        <option value="">UK</option>
        <option value="">Canada</option>
      </select>
      <Icons.ChevronDownIcon className="absolute top-1/2 right-4 z-10 -translate-y-1/2 w-5 h-5" />
    </div>
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

const CheckboxInput = ({label}: { label: string }) => (
  <label htmlFor="formCheckbox" className="flex cursor-pointer">
    <div className="relative pt-0.5">
      <input
        type="checkbox"
        id="formCheckbox"
        className="taskCheckbox sr-only"
      />
      <div
        className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
        <span className="text-white opacity-0">
          <CheckIcon className={"w-3.5 h-3.5"} strokeWidth={3} />
        </span>
      </div>
    </div>
    <p>{label}</p>
  </label>
)

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName="FormLayout" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <Form title={"Contact Form"} btnTitle={"Send Message"}>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <FormInput label={"First name"} type={"text"} placeholder={"Enter your first name"} />
              </div>
              <div className="w-full xl:w-1/2">
                <FormInput label={"Last name"} type={"text"} placeholder={"Enter your last name"} />
              </div>
            </div>
            <div className={'mb-4.5'}>
              <FormInput label={<p>Email <span className="text-meta-1">*</span></p>} type={"email"}
                         placeholder={"Enter your email address"} />
            </div>
            <div className={'mb-4.5'}>
              <FormInput label={"Subject"} type={"text"} placeholder={"Select subject"} />
            </div>
            <div className={"mb-4.5"}>
              <SelectInput />
            </div>
            <div className={"mb-6"}>
              <TextareaWithLabel label={"Message"} placeholder={"Type your message"} />
            </div>
          </Form>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Sign In Form --> */}
          <Form title={"Sign In Form"} btnTitle={"Sign In"}>
            <div className="mb-4.5">
              <FormInput label={"Email"} type={"email"} placeholder={"Enter your email address"} />
            </div>
            <div className="mb-4.5">
              <FormInput label={"Password"} type={"password"} placeholder={"Enter password"} />
            </div>
            <div className="mt-5 mb-5.5 flex items-center justify-between">
              <CheckboxInput label={"Remember me"} />
              <a href="#" className="text-sm text-primary">
                Forget password?
              </a>
            </div>
          </Form>
          {/* <!-- Sign Up Form --> */}
          <Form title={"Sign Up Form"} btnTitle={" Sign Up"}>
            <div className="mb-4.5">
              <FormInput label={"Name"} type={"text"} placeholder={"Enter your full name"} />
            </div>

            <div className="mb-4.5">
              <FormInput label={"Email"} type={"email"} placeholder={"Enter your email address"} />
            </div>

            <div className="mb-4.5">
              <FormInput label={"Password"} type={"password"} placeholder={"Enter password"} />
            </div>

            <div className="mb-5.5">
              <FormInput label={"Re-type Password"} type={"password"} placeholder={"Re-enter password"} />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
