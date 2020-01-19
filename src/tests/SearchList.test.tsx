import { render } from "@testing-library/preact";
import { h } from "preact";
import SearchList from "../routes/search/SearchList";

describe("SearchList Tests", () => {
  test("Should render the Search List", () => {
    const { container } = render(<SearchList />);
    expect(container).not.toBeNull();
  });
});
