import Image from "next/image";
import styles from "./page.module.css";
import Trending from "../components/Trending";
import Recomendations from "../components/Recomendations";

function Home() {
  return (
    <div className="space-y-6 sm:space-y-11">
      <Trending />
      <Recomendations />
    </div>
  );
}

export default Home;
