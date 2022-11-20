"use client";

import { recommendationsAtom } from "../utils/store";
import { useAtom } from "jotai";
import Card from "./Card";
import GridLayout from "../layouts/GridLayout";
import ContainerLayout from "../layouts/ContainerLayout";

export default function Recomendations() {
  const [reco] = useAtom(recommendationsAtom);

  return (
    <ContainerLayout>
      <h2>Recommended for you</h2>
      <GridLayout>
        {reco.map((r, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = r;
          return (
            <Card
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
    </ContainerLayout>
  );
}
