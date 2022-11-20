"use client";
import Navigation from "../components/Navigation";
import "./globals.css";
import Search from "../components/Search";
import { searchAtom } from "../utils/store";
import { useAtom } from "jotai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search] = useAtom(searchAtom);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-default text-on-background">
        <Navigation />

        <main className="py-6 pl-4 md:pl-6 lg:pl-9 md:pt-0 lg:py-6 [grid-area:content] w-screen lg:w-full mt-14 sm:mt-20 md:mt-32 lg:mt-0">
          <Search />
          <div className={`${search ? "hidden" : ""}`}>{children}</div>
        </main>
      </body>
    </html>
  );
}
