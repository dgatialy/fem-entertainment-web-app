'use client';

import { recommendationsAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../ListItem/ListItem';

export default function Recomendations() {
  const [reco] = useAtom(recommendationsAtom);

  return (
    <div>
      <h1>Recommended for you</h1>
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
  );
}
