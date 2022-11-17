"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { Home, Movies, Series, BookmarkSolid, Logo } from "../icons";

export default function Navigation() {
  const pathname = usePathname();

  const classNames = (path: string) =>
    `w-4 h-4 sm:w-5 sm:h-5 hover:fill-red ${
      pathname === path ? "fill-white" : "fill-greyish-blue"
    }`;

  return (
    <div className="[grid-area:navigation] md:px-7 md:py-6 lg:pr-0 lg:pl-8">
      <nav className="bg-semi-dark-blue p-4 md:p-5 items-center md:rounded-xl flex lg:flex-col lg:h-[calc(100vh_-_theme(spacing.11))] lg:gap-16 justify-between sticky top-6">
        <Logo />
        <div className="flex gap-4 lg:flex-col lg:h-full lg:gap-10">
          <Link href="/">
            <Home className={classNames("/")} />
          </Link>
          <Link href="/series">
            <Series className={classNames("/series")} />
          </Link>
          <Link href="/movies">
            <Movies className={classNames("/movies")} />
          </Link>
          <Link href="/bookmarks">
            <BookmarkSolid className={classNames("/bookmarks")} />
          </Link>
        </div>
        <Image src={"/image-avatar.png"} width={32} height={32} alt="Avatar" />
      </nav>
    </div>
  );
}
