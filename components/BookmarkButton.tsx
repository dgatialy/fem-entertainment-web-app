"use client";

import { BookmarkSolid, Bookmark } from "../icons";

type Props = {
  isBookmarked: boolean;
  className?: string;
  onClick?: () => void;
};

export default function BookmarkButton({
  isBookmarked = false,
  className,
  onClick,
}: Props & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`group/bookmark rounded-full top-2 right-2 sm:top-4 sm:right-4 bg-default/50 p-2 sm:p-2.5 hover:bg-white transition-colors cursor-pointer ${className}`}
      onClick={onClick}
    >
      {isBookmarked ? (
        <BookmarkSolid
          className={
            "w-3.5 h-3.5 fill-white group-hover/bookmark:fill-black transition-colors"
          }
        />
      ) : (
        <Bookmark
          className={
            "w-3.5 h-3.5 stroke-white group-hover/bookmark:stroke-black transition-colors"
          }
        />
      )}
    </div>
  );
}
