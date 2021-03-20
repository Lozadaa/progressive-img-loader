import React, { useEffect, useState } from 'react'
import * as Utils from './utils/Utils.js'
import PropTypes from 'prop-types'

import { Image } from './components/Image.jsx'
import { useIsMounted } from 'react-tidy'
import defaultImg from 'assets/images/default.png'

/**
 * The awesome, magic, beautiful (😛) element that preload blurred your thumb images and then load the
 * original quality image with transition effect to show it!
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const ImageLoader = (props) => {
  const {
    src,
    srcPreview,
    alt,
    loader,
    className,
    customImageComponent: CustomImageComponent
  } = props
  const [originalImage, setOriginalImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const isMounted = useIsMounted()
  useEffect(() => {
    if (isMounted) {
      if (!previewImage) {
        Utils.loadImage(srcPreview, (src) => setPreviewImage(src))
      }
      if (!originalImage) {
        Utils.loadImage(src, (src) => setOriginalImage(src))
      }
    }
  }, [previewImage, originalImage])

  const isLoading = !previewImage && !originalImage && !loader
  const isLoadingWithPreloader = !previewImage && !originalImage && loader
  const isPossibleLoadThumbnail = previewImage && !originalImage

  return (
    <React.Fragment>
      {isLoadingWithPreloader && loader}
      {isLoading && <CustomImageComponent src={defaultImg} />}
      {isPossibleLoadThumbnail && (
        <Image
          alt={alt}
          src={previewImage}
          isPreview
          CustomImageComponent={CustomImageComponent}
          className={className}
        />
      )}
      {originalImage && (
        <Image
          alt={alt}
          src={originalImage}
          isPreview={false}
          CustomImageComponent={CustomImageComponent}
          className={className}
        />
      )}
    </React.Fragment>
  )
}

ImageLoader.propTypes = {
  src: PropTypes.string,
  srcPreview: PropTypes.string,
  loader: PropTypes.element,
  alt: PropTypes.string,
  className: PropTypes.string
}
