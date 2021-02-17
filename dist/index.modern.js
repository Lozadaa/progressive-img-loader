import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-simple-animate';
import { useIsMounted } from 'react-tidy';
import defaultImg from './default~stYjkWMJ.png';

var ERROR = "ERROR_LOADING_IMAGE";
function loadImage(src, callback) {
  if (src) {
    var image = new Image();

    image.onload = function () {
      if (callback) {
        callback(src);
      }
    };

    image.onerror = function () {
      if (callback) {
        callback(ERROR);
      }
    };

    image.src = src;
    return;
  }

  callback(ERROR);
}

var Image$1 = function Image(props) {
  var src = props.src,
      alt = props.alt,
      _props$transitionTime = props.transitionTime,
      transitionTime = _props$transitionTime === void 0 ? 1 : _props$transitionTime,
      className = props.className,
      isPreview = props.isPreview,
      CustomImageComponent = props.CustomImageComponent;
  var transitionTimeError = 0;
  var filterWithBlur = {
    filter: 'blur(5px)'
  };
  var filterWithoutBlur = {
    filter: 'blur(0)'
  };
  var duration = src === ERROR ? transitionTimeError : transitionTime;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Animate, {
    play: true,
    duration: duration,
    start: filterWithBlur,
    end: isPreview ? filterWithBlur : filterWithoutBlur
  }, CustomImageComponent && /*#__PURE__*/React.createElement(CustomImageComponent, {
    src: src,
    alt: alt,
    className: className
  }), !CustomImageComponent && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: className
  })));
};

var ImageLoader = function ImageLoader(props) {
  var src = props.src,
      srcPreview = props.srcPreview,
      alt = props.alt,
      loader = props.loader,
      className = props.className,
      customImageComponent = props.customImageComponent;

  var _useState = useState(null),
      originalImage = _useState[0],
      setOriginalImage = _useState[1];

  var _useState2 = useState(null),
      previewImage = _useState2[0],
      setPreviewImage = _useState2[1];

  var isMounted = useIsMounted();
  useEffect(function () {
    if (isMounted) {
      if (!previewImage) {
        loadImage(srcPreview, function (src) {
          return setPreviewImage(src);
        });
      }

      if (!originalImage) {
        loadImage(src, function (src) {
          return setOriginalImage(src);
        });
      }
    }
  }, []);
  var isLoading = !previewImage && !originalImage && !loader;
  var isLoadingWithPreloader = !previewImage && !originalImage && loader;
  var isPossibleLoadThumbnail = previewImage && !originalImage;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isLoadingWithPreloader && loader, isLoading && /*#__PURE__*/React.createElement("customImageComponent", {
    src: defaultImg
  }), isPossibleLoadThumbnail && /*#__PURE__*/React.createElement(Image$1, {
    alt: alt,
    src: previewImage,
    isPreview: true,
    CustomImageComponent: customImageComponent,
    className: className
  }), originalImage && /*#__PURE__*/React.createElement(Image$1, {
    alt: alt,
    src: originalImage,
    isPreview: false,
    CustomImageComponent: customImageComponent,
    className: className
  }));
};
ImageLoader.propTypes = {
  src: PropTypes.string,
  srcPreview: PropTypes.string,
  loader: PropTypes.element,
  alt: PropTypes.string,
  className: PropTypes.string
};

export { ImageLoader };
//# sourceMappingURL=index.modern.js.map
