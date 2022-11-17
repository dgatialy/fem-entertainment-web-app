import Navigation from "../components/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-dark-blue text-pure-white">
        <Navigation />
        <main className="py-6 pl-4 md:pl-7 md:pt-0 lg:pl-9 lg:py-6 max-w-screen-2xl [grid-area:content]">
          {children}
        </main>
      </body>
    </html>
  );
}
