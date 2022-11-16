import styled from "styled-components";

export const NavBarContainer = styled.header`
  width: 100%;
  height: 47px;
  background-color: #151515;
`;

export const NavBarContent = styled.nav`
  max-width: 1280px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media screen and (min-width: 425px) {
    justify-content: space-between;
  }
`;

export const Ul = styled.ul`
  display: none;
  gap: 1rem;

  li {
    list-style: none;

    a {
      font-size: 1.125rem;
      font-weight: 400;
    }
  }

  @media screen and (min-width: 425px) {
    display: flex;
  }
`;

export const Button = styled.button`
  font-size: 1.125rem;
  font-weight: 400;
  width: 7.5rem;
  background-color: #565656;
  border-radius: 11px;
  border: none;
  cursor: pointer;
`;
