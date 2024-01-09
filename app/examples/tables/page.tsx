import Breadcrumb from "@/p9ui/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/p9ui/components/Tables/TableOne";
import TableThree from "@/p9ui/components/Tables/TableThree";
import TableTwo from "@/p9ui/components/Tables/TableTwo";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default TablesPage;
