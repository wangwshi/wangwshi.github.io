import styled from "styled-components";

export const Page = {
  Container: styled.div`
    display: inline-block;
    width: 100%;
  `,
  Header: styled.div`
    color: #000000;
    text-decoration: none;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 2em;
  `,
  Body: styled.div`
    display: block;
    width: 85%;
    max-width: 1400px;
    margin: 0 auto;
  `,
  TextBox: styled.div`
    display: inline-block;
    width: 50%;
  `,
  Intro: styled.div`
    width: 100%;
    margin: 2rem auto 0 auto;
    font-weight: bold;
    font-size: 20px;
    line-height: 2rem;
  `,
  Paragraph: styled.div`
    width: 100%;
    padding: 1rem 0;
    margin: auto;
    line-height: 2rem;
  `
};

export const Grid = {
  Image: styled.img`
    display: flex;
    max-width: 60vh;
    cursor: pointer;
  `
}
