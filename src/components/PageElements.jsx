import styled from "styled-components";

export const Page = {
  Container: styled.div`
    display: inline-block;
    width: 100%;
  `,
  Body: styled.div`
    display: block;
    width: 85%;
    max-width: 1400px;
    margin: 0 auto;
  `,
  ContentBox: styled.div`
    display: inline-block;
    width: 50%;
    vertical-align: top;
  `,
  ImgBox: styled.div`
    display: table;
    padding: 2rem 1rem 0 2rem;
    margin-left: auto;
  `,
  Img: styled.img`
    display: inline-block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 70vh;
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
  `,
  Header: styled.div`
    display: table;
    align-items: center;
    justify-content: center;
    margin: 2rem auto 1rem auto;
    font-weight: bold;
    font-size: 24px;
    line-height: 2rem;
  `,
  CenterContent: styled.div`
    display: table;
    align-items: center;
    justify-content: center;
    margin: auto;
    line-height: 1em;
  `
};

export const Grid = {
  Image: styled.img`
    display: flex;
    max-width: 60vh;
    cursor: pointer;
  `
}
