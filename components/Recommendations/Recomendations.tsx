"use client";

import { recommendationsAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../ListItem/ListItem";

export default function Recomendations() {
  const [reco] = useAtom(recommendationsAtom);

  return (
    <div className="pr-4 md:pr-7 lg:pr-9">
      <h2 className="pb-8">Recommended for you</h2>
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-9">
        {reco.map((r, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = r;
          return (
            <ListItem
              key={i}
              title={title}
              year={year}
              category={category}
              rating={rating}
              isBookmarked={isBookmarked}
              isTrending={false}
              image={thumbnail.regular.large}
            />
          );
        })}
      </div>
    </div>
  );
}
