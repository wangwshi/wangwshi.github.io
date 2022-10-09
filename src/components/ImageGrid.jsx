import React, { useState } from "react";
import { Page, Grid } from '../components/PageElements';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import GridListTileBar from '@material-ui/core/GridListTileBar';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../assets/fullimages', false, /\.(png|jpe?g|svg)$/)).sort();
const thumbnails = importAll(require.context('../assets/thumbnails', false, /\.(png|jpe?g|svg)$/)).sort();

const IGrid = ({images, indexOffset = 0, setPhotoIndex, setIsOpen}) => {
  return images.map((val, i) => (
    <GridImage
      val={val}
      i={i}
      indexOffset={indexOffset}
      setPhotoIndex={setPhotoIndex}
      setIsOpen={setIsOpen}
    />
    ));
}

const GridImage = ({val, i, indexOffset, setPhotoIndex, setIsOpen}) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  return <div className="art">
      <Grid.Image className={""} src={val.thumbnail} alt="" key={i} onClick={() => {
        setPhotoIndex(i + indexOffset);
        setIsOpen(true);
      }}
      onMouseEnter={() => {
        setShowSubtitle(true);
      }}

      onMouseOut={() => {
        setShowSubtitle(false);
      }}
      />
      { showSubtitle && <GridListTileBar
        className="subtitle"
        subtitle={val.name?.split("-").at(-1)}
        title={<span>{val.date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})}</span>}
        />
      }
    </div>
}


function ImageGrid() {
  const cleanImageNames = images.map((img, i) => {
    const name = img.split("/")?.at(-1).split(".").at(0);
    const thumbnail = thumbnails[i];
    return { image: img, name: name, thumbnail: thumbnail}
  });
  const cleanImageRegex = /(19\d{2}|20[012][0-9])\((\d{1,2})(?:st|nd|rd|th)\) (January|February|March|April|May|June|July|August|September|October|November|December) - (\w+)/
  const cleanImageObjects = cleanImageNames.map((name) => {
    const match = name.name.match(cleanImageRegex);
    return {...name,  medium: match[4], date: new Date(`${match?.[3]} ${match?.[2]} ${match?.[1]}`)}
  });
  const traditionalImages = cleanImageObjects.filter((i) => i.medium !== "Digital").sort((a, b) => b.date - a.date)
  const digitalImages = cleanImageObjects.filter((i) => i.medium === "Digital").sort((a, b) => b.date - a.date)
  const lightboxImages = digitalImages.concat(traditionalImages);


  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [stateFlipper, setStateFlipper] = useState(false); // this is such a dumb hack but I blame the package honestly



  const digitalGrid = <IGrid images={digitalImages} setPhotoIndex={setPhotoIndex} setIsOpen={setIsOpen} />;
  const traditionalGrid =<IGrid images={traditionalImages} indexOffset={digitalGrid.length} setPhotoIndex={setPhotoIndex} setIsOpen={setIsOpen} />;

  return(
    <>
      {/* <div>
        {grid}
      </div> */}

      <div id="digital">
        <Page.Header>Digital Art</Page.Header>
        {digitalGrid}
      </div>
      <div id="traditional">
        <Page.Header>Traditional Art</Page.Header>
        {traditionalGrid}
      </div>

      { isOpen && <Lightbox
        mainSrc={lightboxImages[photoIndex].image}
        nextSrc={lightboxImages[(photoIndex + 1) % lightboxImages.length].image}
        prevSrc={lightboxImages[(photoIndex + lightboxImages.length - 1) % lightboxImages.length].image}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + lightboxImages.length - 1) % lightboxImages.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % lightboxImages.length)
        }
        onImageLoad={() => setStateFlipper(!stateFlipper)}
        imageCaption={lightboxImages[photoIndex].name}
      />
    }
    </>
  );
}

export default ImageGrid;
