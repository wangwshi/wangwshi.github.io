import React from "react";
import { Page } from '../components/AboutElements';

function About() {
  return (
    <div className="About">
      <Page.Container>
        <Page.Body>
        <Page.TextBox>
          <Page.Intro>Hannah Wang is a Mathematician, Athlete, and Artist.</Page.Intro>
          <Page.Paragraph>She has committed herself to excellence ever since she was a kid, finding meaning in the quality of work she does every day. She spends her weekends relaxing through a variety of artistic mediums and is proud of every piece she puts out. On weekdays she devotes her time to exploring math and science topics to further her performance in competition UIL, alongside regularly studying and working out to keep her motivated. Varsity Tennis is especially important to her as it has taught her countless lessons of character and has been an amazing opportunity to build meaningful connections with others. Above all, Hannah strives to put the most into what she does, so she can be a force of positivity for those around her.</Page.Paragraph>
        </Page.TextBox>
        </Page.Body>
      </Page.Container>
    </div>
  );
}

export default About;
