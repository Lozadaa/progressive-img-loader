import React, {useEffect, useState} from "react";
import * as Utils from "./utils/Utils.js"
import PropTypes from "prop-types";
import { useStyles } from "./styles";
import {Image} from "./components/Image.jsx";

export const ImageLoader = (props) => {
  const { src, srcPreview, alt, loader, className } = props;
  const [originalImage, setOriginalImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    if(!previewImage){
      Utils.loadImage(srcPreview, (src) => setPreviewImage(src));
    }
    if(!originalImage){
      Utils.loadImage(src, (src) => setOriginalImage(src));
    }

  }, [])

  const isPreloader = !previewImage && !originalImage && loader;
  const isPossibleLoadThumbnail = previewImage && !originalImage

  return (
    <React.Fragment>
      <h1>Loader</h1>
        { isPreloader && loader }
        { isPossibleLoadThumbnail && <Image alt={alt} src={previewImage} isPreview={true} className={className ? className : classes.defaultImageClass} /> }
        { originalImage && <Image alt={alt} src={originalImage} isPreview={false} className={className ? className : classes.defaultImageClass} /> }
    </React.Fragment>
  );

}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  srcPreview: PropTypes.string,
  loader: PropTypes.element,
  alt: PropTypes.string,
  className: PropTypes.string,
}
