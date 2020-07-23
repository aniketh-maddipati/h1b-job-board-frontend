import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import searchBar from "./components/searchBar";

test("renders learn react link", () => {
  const { getByText } = render(<App /> <searchBar/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
