import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { recipeMock } from "../../common/mock/recipeData";
import SearchItem from "../../components/search/searchItem/SearchItem";
import style from "./SearchList.scss";
export interface Recipe {
  name: string;
  steps: string[];
  description?: string;
}

interface Props {}
const SearchList: preact.FunctionalComponent<Props> = props => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);

  useEffect(() => {
    const newList: Recipe[] = [];
    for (let i = 0; i < 9; i++) {
      newList.push(recipeMock);
    }
    setRecipeList(newList);
  }, []);
  return (
    <div className={style.containerName}>
      <ul className={style.recipeList}>
        {recipeList.map(recipe => (
          <li className={style.recipeItem}>
            <SearchItem recipe={recipe} />
          </li>
        ))}
        <li className={style.recipeItem}>
          <SearchItem recipe={recipeMock} />
        </li>
      </ul>
    </div>
  );
};

export default SearchList;
