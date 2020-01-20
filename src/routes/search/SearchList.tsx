import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { recipeMock } from "../../common/mock/recipeData";
import style from "./SearchList.scss";
export interface Recipe {
  name: string;
  steps: string[];
}

interface Props {}
const SearchList: preact.FunctionalComponent<Props> = props => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);

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
