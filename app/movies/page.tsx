"use client";

import { moviesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";
import GridLayout from "../../layouts/GridLayout";
import ContainerLayout from "../../layouts/ContainerLayout";

export default function Movies() {
  const [movies] = useAtom(moviesAtom);

  return (
    <ContainerLayout>
      <h1>Movies</h1>
      <GridLayout>
        {movies.map((m, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = m;
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
