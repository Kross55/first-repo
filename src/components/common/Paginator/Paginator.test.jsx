import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {

  test("pagesCount is 11 but should be showen only 10", () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.length).toBe(10);
  });

  test("if pagesCount is more then 10 button NEXT should be present", () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
    const root = component.root;
    let button = root.findByType("button")
    expect(button.length).toBe(1);м
  });  

});