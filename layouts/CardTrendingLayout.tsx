import { ReactElement } from "react";
import { JsxElement } from "typescript";

export default function GridLayout({
  thumbnail,
  year,
  category,
  rating,
  title,
  className,
}: {
  thumbnail: JSX.Element;
  year: number;
  category: JSX.Element;
  rating: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`group/card cursor-pointer flex flex-col gap-1.5 relative ${className}`}
    >
      {thumbnail}

      <div className="absolute left-0 bottom-0 p-3 sm:p-6 flex flex-col gap-1 w-full bg-gradient-to-t from-black/75 to-blue-black/01 rounded-lg">
        <div className="flex gap-2 text-xs sm:text-base leading-tight font-light opacity-75">
          <span className="flex gap-2 after:content-['·']">{year}</span>
          <span className="flex gap-2 after:content-['·']">
            <span className="flex gap-1.5 items-center">{category}</span>
          </span>
          <span>{rating}</span>
        </div>
        <div className="font-medium text-sm sm:text-2xl leading-tight">
          {title}
        </div>
      </div>
    </div>
  );
}
