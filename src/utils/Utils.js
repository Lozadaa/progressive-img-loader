export function loadImage(src, callback){
  if(src){
    let image = new Image();
    image.onload = function () {
      if(callback){
        callback(src);
      }
    }
    image.src = src;
  }
}
