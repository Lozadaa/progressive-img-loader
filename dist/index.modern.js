import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import { Animate } from 'react-simple-animate';

function loadImage(src, callback) {
  if (src) {
    var image = new Image();

    image.onload = function () {
      if (callback) {
        callback(src);
      }
    };

    image.src = src;
  }
}

var useStyles = makeStyles(function (theme) {
  return {
    defaultImageClass: {
      width: "300px",
      height: "300px"
    }
  };
});

var useStyles$1 = makeStyles(function (theme) {
  return {
    loading: {
      filter: "blur(20px)"
    }
  };
});

var Image$1 = function Image(props) {
  var src = props.src,
      alt = props.alt,
      _props$transitionTime = props.transitionTime,
      transitionTime = _props$transitionTime === void 0 ? 2 : _props$transitionTime,
      className = props.className,
      isPreview = props.isPreview;
  var classes = useStyles$1();
  var classPreview = isPreview ? classes.loading : '';
  var filterWithBlur = {
    filter: 'blur(5px)'
  };
  var filterWithoutBlur = {
    filter: 'blur(0)'
  };
  return /*#__PURE__*/React.createElement(Animate, {
    play: true,
    duration: transitionTime,
    start: filterWithBlur,
    end: filterWithoutBlur
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: clsx(classPreview, className)
  }));
};

var ImageLoader = function ImageLoader(props) {
  var src = props.src,
      srcPreview = props.srcPreview,
      alt = props.alt,
      loader = props.loader,
      className = props.className;

  var _useState = useState(null),
      originalImage = _useState[0],
      setOriginalImage = _useState[1];

  var _useState2 = useState(null),
      previewImage = _useState2[0],
      setPreviewImage = _useState2[1];

  var classes = useStyles();
  useEffect(function () {
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
  }, []);
  var isPreloader = !previewImage && !originalImage && loader;
  var isPossibleLoadThumbnail = previewImage && !originalImage;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Loader"), isPreloader && loader, isPossibleLoadThumbnail && /*#__PURE__*/React.createElement(Image$1, {
    alt: alt,
    src: previewImage,
    isPreview: true,
    className: className ? className : classes.defaultImageClass
  }), originalImage && /*#__PURE__*/React.createElement(Image$1, {
    alt: alt,
    src: originalImage,
    isPreview: false,
    className: className ? className : classes.defaultImageClass
  }));
};
ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  srcPreview: PropTypes.string,
  loader: PropTypes.element,
  alt: PropTypes.string,
  className: PropTypes.string
};

export { ImageLoader };
//# sourceMappingURL=index.modern.js.map
