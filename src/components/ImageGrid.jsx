import React, { useState } from "react";
import { Page, Grid } from '../components/PageElements';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../assets/', false, /\.(png|jpe?g|svg)$/));


function ImageGrid() {
  console.log("re-rendering")
  console.log(images);
  console.log(images[0].split("/").at(-1))


  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [stateFlipper, setStateFlipper] = useState(false); // this is such a dumb hack but I blame the package honestly

  const grid = images.map((val, i) => (
    <Grid.Image src={val} alt="" key={i} onClick={() => {
      setPhotoIndex(i);
      setIsOpen(true);
    }}
    />

  ))
  return(
    <Page.Body>
      {/* <div>
        {grid}
      </div> */}
      <div className="row">
        <div className="column">
          {grid.filter((img, i) => i % 3 === 0)}
        </div>
        <div className="column">
          {grid.filter((img, i) => i % 3 === 1)}

        </div>
        <div className="column">
          {grid.filter((img, i) => i % 3 === 2)}
        </div>
      </div>
      { isOpen && <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
        onImageLoad={() => setStateFlipper(!stateFlipper)}
        imageCaption={images[photoIndex]?.split("/")?.at(-1).split(".")?.at(0)}
      />
    }
    </Page.Body>
  );
}

export default ImageGrid;
