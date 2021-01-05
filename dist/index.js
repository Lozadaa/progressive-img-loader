function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
require('clsx');
var reactSimpleAnimate = require('react-simple-animate');

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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(reactSimpleAnimate.Animate, {
    play: true,
    duration: duration,
    start: filterWithBlur,
    end: isPreview ? filterWithBlur : filterWithoutBlur
  }, CustomImageComponent && /*#__PURE__*/React__default.createElement(CustomImageComponent, {
    src: src,
    alt: alt,
    className: className
  }), !CustomImageComponent && /*#__PURE__*/React__default.createElement("img", {
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

  var _useState = React.useState(null),
      originalImage = _useState[0],
      setOriginalImage = _useState[1];

  var _useState2 = React.useState(null),
      previewImage = _useState2[0],
      setPreviewImage = _useState2[1];

  React.useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, isPreloader && loader, isPossibleLoadThumbnail && /*#__PURE__*/React__default.createElement(Image$1, {
    alt: alt,
    src: previewImage,
    isPreview: true,
    CustomImageComponent: customImageComponent,
    className: className
  }), originalImage && /*#__PURE__*/React__default.createElement(Image$1, {
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

exports.ImageLoader = ImageLoader;
//# sourceMappingURL=index.js.map
