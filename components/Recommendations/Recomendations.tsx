"use client";

import { recommendationsAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../ListItem/ListItem";
import GridLayout from "../../layouts/GridLayout";
import ContentLayout from "../../layouts/ContentLayout";

export default function Recomendations() {
  const [reco] = useAtom(recommendationsAtom);

  return (
    <ContentLayout>
      <h2 className="pb-8">Recommended for you</h2>
      <GridLayout>
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
      </GridLayout>
    </ContentLayout>
  );
}
