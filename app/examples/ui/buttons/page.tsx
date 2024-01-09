import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import * as Icons from "@heroicons/react/24/outline"

interface ButtonProps {
  title: string;
  href: string;
  bgColor?: string;
  textColor?: string;
  withBorder?: boolean
  rounded?: string;
  Icon?: any;
}

function Button({ title, href, bgColor, textColor, withBorder, rounded, Icon }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center ${Icon && "gap-2.5"} bg-${bgColor} py-4 px-10  text-center font-medium
      ${withBorder && `border border-${textColor}`} ${rounded && `rounded-${rounded}`}
      text-${textColor} hover:bg-opacity-90 lg:px-8 xl:px-10`}
    >
      {Icon && (
        <Icon className={`w-5 h-5 color-${textColor}`} />
      )}
      {title}
    </Link>
  );
}

export const metadata: Metadata = {
  title: "Buttons Page | Next.js E-commerce Dashboard Template",
  description: "This is Buttons page for TailAdmin Next.js",
  // other metadata
};

const Buttons = () => {
  return (
    <>
      <Breadcrumb pageName="Buttons" />

      {/* <!-- Normal Button Items --> */}
      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Normal Button
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <Button
              href="#"
              title="Button"
              bgColor="primary"
              textColor="white"
            />
            <Button
              href="#"
              title="Button"
              bgColor="primary"
              textColor="white"
              rounded="md"
            />
            <Button
              href="#"
              title="Button"
              bgColor="primary"
              textColor="white"
              rounded="full"
            />
            <Button
              href="#"
              title="Button"
              textColor="primary"
              withBorder
              rounded="md"
            />
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-20">
            <Button
              href="#"
              title="Button"
              bgColor="meta-3"
              textColor="white"
            />
            <Button
              href="#"
              title="Button"
              bgColor="meta-3"
              textColor="white"
              rounded="md"
            />
            <Button
              href="#"
              title="Button"
              bgColor="meta-3"
              textColor="white"
              rounded="full"
            />
            <Button
              href="#"
              title="Button"
              textColor="meta-3"
              withBorder
              rounded="md"
            />
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-20">
            <Button
              href="#"
              title="Button"
              bgColor="black"
              textColor="white"
            />
            <Button
              href="#"
              title="Button"
              bgColor="black"
              textColor="white"
              rounded="md"
            />
            <Button
              href="#"
              title="Button"
              bgColor="black"
              textColor="white"
              rounded="full"
            />
            <Button
              href="#"
              title="Button"
              textColor="black"
              withBorder
              rounded="md"
            />
          </div>
        </div>
      </div>

      {/* <!-- Button With Icon Items --> */}
      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Button With Icon
          </h3>
        </div>

        <div className="p-4 md:p-6 xl:p-9">
          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
            <Button
              href="#"
              title="Button With Icon"
              bgColor="primary"
              textColor="white"
              Icon={Icons.EnvelopeIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              bgColor="meta-3"
              textColor="white"
              Icon={Icons.EnvelopeIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              bgColor="black"
              textColor="white"
              Icon={Icons.EnvelopeIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              textColor="primary"
              withBorder
              Icon={Icons.EnvelopeIcon}
            />
          </div>

          <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
            <Button
              href="#"
              title="Button With Icon"
              bgColor="primary"
              textColor="white"
              rounded="md"
              Icon={Icons.ShoppingCartIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              bgColor="meta-3"
              textColor="white"
              rounded="md"
              Icon={Icons.ShoppingCartIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              bgColor="black"
              textColor="white"
              rounded="md"
              Icon={Icons.ShoppingCartIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              textColor="primary"
              rounded="md"
              withBorder
              Icon={Icons.ShoppingCartIcon}
            />
          </div>

          <div className="flex flex-wrap gap-5 xl:gap-7.5">
            <Button
              href="#"
              title="Button With Icon"
              bgColor="primary"
              textColor="white"
              rounded="full"
              Icon={Icons.UsersIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              bgColor="meta-3"
              textColor="white"
              rounded="full"
              Icon={Icons.UsersIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              bgColor="black"
              textColor="white"
              rounded="full"
              Icon={Icons.UsersIcon}
            />
            <Button
              href="#"
              title="Button With Icon"
              textColor="primary"
              rounded="full"
              withBorder
              Icon={Icons.UsersIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
