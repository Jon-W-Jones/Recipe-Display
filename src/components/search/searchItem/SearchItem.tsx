import { FunctionalComponent, h } from "preact";
import { recipeMock } from "../../../common/mock/recipeData";
import { Recipe } from "../../../routes/search/SearchList";
// @ts-ignore
import style from "./SearchItem.scss";

interface Props {
  recipe: Recipe;
}
const SearchItem: FunctionalComponent<Props> = ({ recipe }: Props) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <ol aria-label="Recipe Steps" className={style.instructions}>
        {recipe.steps.length > 0 &&
          recipe.steps.map((step, index) => {
            return (
              <li
                key={`${recipe.name} ${index}`}
                aria-label={`Step ${index}`}
                className={style.step}
              >
                {step}
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default SearchItem;
