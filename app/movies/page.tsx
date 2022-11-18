"use client";

import { moviesAtom } from "../../utils/store";
import { useAtom } from "jotai";
import ListItem from "../../components/ListItem/ListItem";
import GridLayout from "../../layouts/GridLayout";
import ContentLayout from "../../layouts/ContentLayout";

export default function Movies() {
  const [movies] = useAtom(moviesAtom);

  return (
    <ContentLayout>
      <h1 className="pb-8">Movies</h1>
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
    </ContentLayout>
  );
}
