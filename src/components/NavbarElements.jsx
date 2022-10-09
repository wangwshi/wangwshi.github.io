import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 2rem 0rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
  `,
  Logo: styled(Link)`
    color: #000000;
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
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

