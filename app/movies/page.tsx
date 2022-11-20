"use client";

import { moviesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import Card from "../../components/Card";
import GridLayout from "../../layouts/GridLayout";
import ContainerLayout from "../../layouts/ContainerLayout";

function Movies() {
  const [movies] = useAtom(moviesAtom);

  return (
    <ContainerLayout>
      <h1>Movies</h1>
      <GridLayout>
        {movies.map((m, i) => {
          const { title, year, category, rating, isBookmarked, thumbnail } = m;
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

export default Movies;
