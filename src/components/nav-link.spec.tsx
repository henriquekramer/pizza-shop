import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router";
import { Fragment } from "react";

describe("NavLink", () => {
  it("should highlight the nav link when is the current page link", () => {
    const wrapper = render(
      <Fragment>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Fragment>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("About").dataset.current).toEqual("true");
    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
  });
});
