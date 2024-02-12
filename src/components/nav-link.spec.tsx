import { render } from "@testing-library/react";
import { NavLink } from "./nav-link";
import { MemoryRouter } from "react-router-dom";

describe('NavLink', () => {
  it('should highlight when the link is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/about']}>
            {children}
          </MemoryRouter>
        )
      }
    })

    expect(wrapper.getByText('Home').dataset.current).toEqual('false')
    expect(wrapper.getByText('About').dataset.current).toEqual('true')
  })
})