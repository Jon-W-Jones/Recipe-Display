import { h } from "preact";
import { Link } from "preact-router";
import style from "./home.scss";

// TODO: Componentize Search and add functionality.
interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
  return (
    <div class={style.home}>
      <h1>Search For Your Recipe</h1>
      <div className={style.searchCombo}>
        <input className={style.search} />
        <button className={style.go}>
          <Link href="/search">Go</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
