"use client";

import { toggleBookmarkAtom } from "../utils/store";
import { useAtom } from "jotai";
import Image from "next/image";
import Bookmark from "./BookmarkButton";
import { Play as PlayIcon } from "../icons";

type Props = {
  title: string;
  isBookmarked: boolean;
  image: string;
  isTrending?: boolean;
  className?: string;
};

export default function Thumbnail({
  isBookmarked,
  image,
  title,
  isTrending,
  className,
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  const [, toggleBookmark] = useAtom(toggleBookmarkAtom);

  const PlayButton = () => {
    return (
      <div className="hidden  z-20 absolute group-hover/card:flex justify-center items-center gap-1 py-1 sm:py-2 px-1 sm:px-2 sm:gap-3 rounded-full bg-white/25 ">
        <PlayIcon className={"w-8 h-8"} />
        <span className="text-sm sm:text-lg leading-tight font-medium pr-2 sm:pr-3">
          Play
        </span>
      </div>
    );
  };

  return (
    <div
      className={`cursor-pointer relative flex items-center justify-center ${className}`}
    >
      <PlayButton />
      <Image
        src={image}
        width={500}
        height={500}
        alt="Picture of the author"
        className={`group-hover/card:brightness-50 transition rounded-lg ${
          isTrending ? "aspect-[16/9]" : "aspect-[140/87]"
        } w-full`}
      />
      <Bookmark
        isBookmarked={isBookmarked}
        className="absolute z-20"
        onClick={() => toggleBookmark(title)}
      />
    </div>
  );
}
