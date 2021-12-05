import { render } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { CarItem } from "../components/CarItem/CarItem";
import { CarsList } from "../components/CarsList/CarsList";

import { responseMock } from "./moks";
import { routes } from "../constants/routes";

const history = createMemoryHistory();
const route = routes.carList;
history.push(route);

test("Render CarItem", () => {
  const { container } = render(
    <Router history={history}>
      <CarItem
        id={responseMock.offers[0].id}
        prices={responseMock.offers[0].prices}
        carGroupInfo={responseMock.offers[0].carGroupInfo}
      />
    </Router>
  );
  expect(container).toMatchSnapshot();
});

test("Render CarsList", () => {
  const { container } = render(
    <Router history={history}>
      <CarsList />
    </Router>
  );
  expect(container).toMatchSnapshot();
});
