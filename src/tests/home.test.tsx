import { render } from "@testing-library/preact";
import { h } from "preact";
import Home from "../routes/home/index";

describe("Home Tests", () => {
  test("renders the home page", () => {
    const { queryByText } = renderComponent();
    const titleText = "Search For Your Recipe";
    expect(queryByText(titleText)).not.toBeNull();
  });
});

// Placeholder function for eventual context testing.
const renderComponent = () => {
  return render(<Home />);
};
