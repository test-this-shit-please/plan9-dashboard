"use client";
import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import Layout from "@/p9ui/Layout/layout";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <Layout baseUrl={'/examples'}>{children}</Layout>
  );
}
