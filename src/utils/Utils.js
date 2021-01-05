export const ERROR = "ERROR_LOADING_IMAGE";
/**
 * This method execute the magic when the image is loaded
 * @param src
 * @param callback
 */
export function loadImage(src, callback){
  if(src){
    const image = new Image();
    image.onload = function () {
      if(callback){
        callback(src);
      }
    }
    image.onerror = function () {
      if(callback){
        callback(ERROR);
      }
    }
    image.src = src;
    return;
  }
  callback(ERROR);
}
