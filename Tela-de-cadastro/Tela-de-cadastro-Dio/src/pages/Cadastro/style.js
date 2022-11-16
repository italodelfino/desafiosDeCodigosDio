import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: #1e192c;

  @media screen and (min-width: 1024px) {
    height: 92.5vh;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;

  margin: auto;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    max-width: 1280px;

    flex-direction: row;
    justify-content: left;
    gap: 24rem;

    padding: 8.812rem 1rem 0 1rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 43.58px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 388px;
    text-align: left;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  h3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 44px;
    text-align: center;
    margin-top: 2rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 25px;
    font-weight: 400;
    text-align: center;
  }

  @media screen and (min-width: 426px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 374px;
    margin-top: unset;
    hr {
      display: none;
    }

    h3 {
      text-align: left;
      margin-top: unset;
    }
    p {
      text-align: left;
    }
  }
`;

export const P = styled.p`
  font-weight: 700;
  font-size: 0.875rem;

  a {
    color: #23dd7a;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  background-color: #e4105d;
  border: none;
  border: 1px solid #e4105d;
  border-radius: 27px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 73%;
  }
`;

export const Label = styled.label`
  display: flex;
  svg {
    padding-right: 0.5rem;
  }
  svg path {
    color: #8647ad;
  }
`;
