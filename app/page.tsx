import Image from "next/image";
import styles from "./page.module.css";
import Trending from "../components/Trending/Trending";
import Recomendations from "../components/Recommendations/Recomendations";
//<div className='grid grid-col-1 gap-10'>
export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-11">
      <Trending />
      <Recomendations />
    </div>
  );
}
