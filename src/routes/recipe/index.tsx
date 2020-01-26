import { h } from "preact";
import RecipeDetails from "../../components/recipe/RecipeDetails/RecipeDetails";
import style from "./style.scss";

interface Props {}
/**
 * Should be the page where the user is able to perform CRUD operations on their recipes/list
 * This page should be available to logged in users shomehow
 * @param props - does not contain anything currently.
 * @returns Page component
 */
const RecipePage: preact.FunctionalComponent<Props> = props => {
  return (
    <div className={style.pageContainer}>
      <RecipeDetails />
    </div>
  );
};

export default RecipePage;
