import { h } from "preact";
import style from "./home.scss";

// TODO: Componentize Search and add functionality.
interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
  return (
    <div class={style.home}>
      <h1>Search For Your Recipe</h1>
      <input className={style.search} />
      <button className={style.go}>Go</button>
    </div>
  );
};

export default Home;
