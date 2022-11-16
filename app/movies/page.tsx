'use client';

import { moviesAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../../components/ListItem/ListItem';

export default function Movies() {
  const [movies] = useAtom(moviesAtom);

  return (
    <div>
      <h1>Movies</h1>
      <ul>{movies && movies.map((m, i) => <ListItem key={i} {...m} />)}</ul>
    </div>
  );
}
