import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";
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
      <h3 className={style.itemTitle}>
        <Link href="/recipe">{recipe.name}</Link>
      </h3>
      {!!recipe.description && (
        <p className={style.recipeDescription}>{recipe.description}</p>
      )}
      <div className={style.itemDetails}>
        <h4 className={style.itemSteps}>Steps: </h4>
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
    </div>
  );
};

export default SearchItem;
