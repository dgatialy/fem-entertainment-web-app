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

      <body className="bg-dark-blue text-pure-white">
        <Navigation />

        <main className="py-6 pl-4 sm:pl-6 lg:pl-9 md:pt-0 lg:py-6 [grid-area:content] w-screen lg:w-full">
          <Search />
          <div className={`${search ? "hidden" : ""}`}>{children}</div>
        </main>
      </body>
    </html>
  );
}
