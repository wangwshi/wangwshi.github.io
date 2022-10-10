import React from "react";
import { Page } from '../components/PageElements';
import profile from '../assets/hannah.jpg';

function About() {
  return (
    <div className="About">
      <Page.ContentBox>
        <Page.Intro>Hannah Wang is an artist, math lover, and athlete.</Page.Intro>
        <Page.Paragraph>She has strived for excellence ever since she was young, taking pride in quality of work she commits herself to. She spends her weekends relaxing through a variety of artistic mediums she draws inspiration from, and expresses her dreams and growth through each piece of art she completes. On the weekdays, she devotes her time to studying math and science topics, not only because of her curiosity, but also to better her performance in academic competitions. Alongside that, she devotes her time to varsity tennis, where it's taught her countless lessons of character and the importance of having a strong mental. It has also been an amazing opportunity to build meaningful connections with teammates which she will cherish for years to come. Above all, Hannah strives to put the most into what she does, so she can be a force of positivity for those around her.</Page.Paragraph>
      </Page.ContentBox>
      <Page.ContentBox>
        <Page.ImgBox>
          <Page.Img src={profile}/>
        </Page.ImgBox>
      </Page.ContentBox>
    </div>
  );
}

export default About;
