import React from "react";
import { CategoryAdd } from "./CategoryAdd";
import { Display } from "../Display/Display";

export const Subscribers = () => {
  return (
    <React.Fragment>
      <Display collName="categories" fields={["catName", "catId"]} />
      <Display collName="subscribers" fields={["fname", "lname", "city"]} />
    </React.Fragment>
  );
};
