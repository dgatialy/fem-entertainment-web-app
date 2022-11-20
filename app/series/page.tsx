"use client";

import { seriesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import Card from "../../components/Card";
import GridLayout from "../../layouts/GridLayout";
import ContainerLayout from "../../layouts/ContainerLayout";

function Series() {
  const [series] = useAtom(seriesAtom);

  return (
    <ContainerLayout>
      <h1>Series</h1>
      <GridLayout>
        {series.map((s, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = s;
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

export default Series;
