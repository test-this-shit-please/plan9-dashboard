"use client";
import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import {useState, useEffect} from "react";
import Layout from "@/p9ui/Layout/layout";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Layout baseUrl={'/examples'}>{children}</Layout>
  );
}
