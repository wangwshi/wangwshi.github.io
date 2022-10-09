import React from "react";
import { Page, Grid } from '../components/PageElements';

function importAll(r) {
  return r.keys().map(r);
}

function ImageGrid() {
  const images = importAll(require.context('../assets/', false, /\.(png|jpe?g|svg)$/));
  console.log("re-rendering")
  const grid = images.map((val) => (
    <Grid.Image src={val} alt=""/>
  ))
  return(
    <Page.Body>
      {grid}
    </Page.Body>
  );
}

export default ImageGrid;
