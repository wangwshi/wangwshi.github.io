import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 0.5rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
  `,
  Logo: styled.h1`
    padding: 1rem 0rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
      color: #000000;
      font-weight: bold;
    }
  `
};

