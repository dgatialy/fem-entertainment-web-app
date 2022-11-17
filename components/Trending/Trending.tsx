"use client";

import { trendinAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItemTrending from "../ListItemTrending/ListItemTrending";

export default function Trending() {
  const [trending] = useAtom(trendinAtom);

  return (
    <div>
      <h2 className="pb-8">Trending</h2>
      <div className="grid grid-flow-col auto-col-sc gap-10 overflow-x-scroll scrollbar-hide snap-mandatory snap-x">
        {trending.map((t, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = t;
          return (
            <ListItemTrending
              key={i}
              title={title}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              isTrending={true}
              image={
                thumbnail.trending?.large
                  ? thumbnail.trending?.large
                  : thumbnail.regular.large
              }
              className="snap-center"
            />
          );
        })}
      </div>
    </div>
  );
}
