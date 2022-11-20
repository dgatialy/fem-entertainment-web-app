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
    <div className={`flex flex-col gap-2 ${className ? className : ""}`}>
      {thumbnail}
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 text-xs sm:text-sm leading-tight font-light opacity-75">
          <span className="flex gap-2 after:content-['·']">{year}</span>
          <span className="flex gap-2 after:content-['·']">
            <span className="flex gap-1.5 items-center">{category}</span>
          </span>
          <span>{rating}</span>
        </div>
        <div className="font-medium text-sm sm:text-lg leading-tight">
          {title}
        </div>
      </div>
    </div>
  );
}
