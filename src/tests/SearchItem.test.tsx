import { render } from "@testing-library/preact";
import { h } from "preact";
import { recipeMock } from "../common/mock/recipeData";
import SearchItem from "../components/search/searchItem/SearchItem";

describe("SearchList Tests", () => {
  test("Should render the Search List", () => {
    const { container } = render(<SearchItem recipe={recipeMock} />);
    expect(container).not.toBeNull();
  });
});
