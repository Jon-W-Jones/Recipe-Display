import { render } from "@testing-library/preact";
import { h } from "preact";
import SearchList from "../routes/search/SearchList";

describe("SearchList Tests", () => {
  test("Should render the Search List", () => {
    const { container } = render(<SearchList />);
    expect(container).not.toBeNull();
  });
  test("Should render recipe list.", () => {
    const { container } = render(<SearchList />);
    const recipeContainer = container.getElementsByTagName("ul");
    expect(recipeContainer).not.toBeNull();
    expect(recipeContainer.length).toBeGreaterThan(0);
    const recipeItems = container.querySelectorAll(".recipeItem");
    expect(recipeItems.length).toEqual(10);
  });
});
