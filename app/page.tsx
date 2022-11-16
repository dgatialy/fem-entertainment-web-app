import Image from 'next/image';
import styles from './page.module.css';
import Trending from '../components/Trending/Trending';
import Recomendations from '../components/Recommendations/Recomendations';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <Trending />
      <Recomendations />


      </main>
    </div>
  );
}
