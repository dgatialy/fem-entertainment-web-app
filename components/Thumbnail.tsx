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
      <div className="hidden group-hover/thumb:flex gap-4 rounded-full justify-center items-center  bg-pure-white/25 z-20 py-2 px-2 absolute ">
        <PlayIcon className={"w-8 h-8"} />
        <span className="text-lg leading-tight font-medium pr-3">Play</span>
      </div>
    );
  };

  return (
    <div className="group/thumb cursor-pointer relative flex items-center justify-center">
      <PlayButton />
      <Image
        src={image}
        width={500}
        height={500}
        alt="Picture of the author"
        className={`group-hover/thumb:brightness-50 rounded-lg ${
          isTrending ? "aspect-[16/9]" : "aspect-[140/87]"
        } w-full`}
      />
      <Bookmark
        isBookmarked={isBookmarked}
        className="absolute z-50"
        onClick={() => toggleBookmark(title)}
      />
    </div>
  );
}
