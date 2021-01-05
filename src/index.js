import React, {useEffect, useState} from "react";
import * as Utils from "./utils/Utils.js"
import PropTypes from "prop-types";

import {Image} from "./components/Image.jsx";

/**
 * The awesome, magic, beautiful (😛) element that preload blurred your thumb images and then load the
 * original quality image with transition effect to show it!
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ImageLoader = (props) => {
  const { src, srcPreview, alt, loader, className, customImageComponent } = props;
  const [originalImage, setOriginalImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
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
        { isPreloader && loader }
        { isPossibleLoadThumbnail && <Image alt={alt}
                                            src={previewImage}
                                            isPreview={true}
                                            CustomImageComponent={customImageComponent}
                                            className={className}
        /> }
        { originalImage && <Image alt={alt}
                                  src={originalImage}
                                  isPreview={false}
                                  CustomImageComponent={customImageComponent}
                                  className={className}
        /> }
    </React.Fragment>
  );

}

ImageLoader.propTypes = {
  src: PropTypes.string,
  srcPreview: PropTypes.string,
  loader: PropTypes.element,
  alt: PropTypes.string,
  className: PropTypes.string,
}
