import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import style from "./SearchList.scss";
interface Recipe {
  name: string;
  steps: string[];
}
interface Props {}
const SearchList: preact.FunctionalComponent<Props> = props => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const recipeMock: Recipe = {
    name: "Mock Recipe",
    steps: ["Take the water", "Put it in the kettle", "Boil it"]
  };
  useEffect(() => {
    const newList: Recipe[] = [];
    newList.push(recipeMock);
    setRecipeList(newList);
  }, []);
  return (
    <div className={style.containerName}>
      <ul>
        {recipeList.map(item => (
          <li className={style.recipeItem}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
