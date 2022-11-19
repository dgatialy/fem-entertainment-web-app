"use client";

import { seriesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";
import GridLayout from "../../layouts/GridLayout";
import ContainerLayout from "../../layouts/ContainerLayout";

export default function Series() {
  const [series] = useAtom(seriesAtom);

  return (
    <ContainerLayout>
      <h1>Series</h1>
      <GridLayout>
        {series.map((s, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = s;
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
    </ContainerLayout>
  );
}
