'use client';

import { seriesAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import ListItem from '../../components/ListItem/ListItem';

export default function Series() {
  const [series] = useAtom(seriesAtom);

  return (
    <div>
      <h1>Series</h1>
      <ul>{series && series.map((s, i) => <ListItem key={i} {...s} />)}</ul>
    </div>
  );
}
