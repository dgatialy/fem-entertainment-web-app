"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { Home, Movies, Series, BookmarkNavigation, Logo } from "../icons";
import { bookmarksAtom } from "../utils/store";
import { useAtomValue } from "jotai";

export default function Navigation() {
  const pathname = usePathname();
  const bookmarksCount = useAtomValue(bookmarksAtom).length;

  const classNames = (path: string) =>
    `w-4 h-4 sm:w-5 sm:h-5 hover:fill-accent transition-colors ${
      pathname === path ? "fill-white" : "fill-on-surface"
    }`;

  return (
    <div className="[grid-area:navigation] md:px-6 md:py-6 lg:pr-0 fixed w-full lg:w-fit lg:relative z-50">
      <nav className="bg-surface p-4 md:py-4 md:px-4 lg:px-7 lg:py-8 items-center md:rounded-xl flex lg:flex-col lg:h-[calc(100vh_-_theme(spacing.11))] lg:gap-16 justify-between sticky top-6">
        <Logo />
        <div className="flex gap-6 sm:gap-8 lg:gap-10 lg:flex-col lg:h-full">
          <Link href="/" aria-label="Go to Dashboard">
            <Home className={classNames("/")} />
          </Link>
          <Link href="/series" aria-label="Go to Series">
            <Series className={classNames("/series")} />
          </Link>
          <Link href="/movies" aria-label="Go to Movies">
            <Movies className={classNames("/movies")} />
          </Link>
          <Link href="/bookmarks" aria-label="Go to Bookmarks">
            <div className="relative">
              <BookmarkNavigation className={classNames("/bookmarks")} />
              {bookmarksCount > 0 && (
                <div
                  className={`absolute text-xs font-light bg-accent rounded-full p-0.5 h-5 text-center scale-75 top-0 -translate-y-2/4 ${
                    bookmarksCount < 100
                      ? "w-5 translate-x-1/4 sm:translate-x-2/4"
                      : "w-7 translate-x-1/4"
                  }`}
                >
                  {bookmarksCount}
                </div>
              )}
            </div>
          </Link>
        </div>
        <Image
          src={"/image-avatar.png"}
          width={32}
          height={32}
          className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-white border rounded-full"
          alt="Avatar"
        />
      </nav>
    </div>
  );
}
