import React from "react";
import clsx from "clsx";
import {Animate} from "react-simple-animate";
import {ERROR} from "../utils/Utils";

/**
 * Custom component to manage logic of the images :)
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const Image = (props) => {
  const {src, alt, transitionTime = 1, className, isPreview, CustomImageComponent} = props;
  const transitionTimeError = 0;
  const filterWithBlur = {filter: 'blur(5px)'};
  const filterWithoutBlur = {filter: 'blur(0)'};
  const duration = src === ERROR ? transitionTimeError : transitionTime;
  return (
    <React.Fragment>
      <Animate
        play={true}
        duration={duration}
        start={filterWithBlur}
        // if is a preview image we don't wanna remove the blur effect
        end={isPreview ? filterWithBlur : filterWithoutBlur}
      >
        { // With their image component
          CustomImageComponent && <CustomImageComponent src={src} alt={alt} className={className}/>
        }
        { // With our image component
          !CustomImageComponent && <img src={src} alt={alt} className={className}/>
        }
      </Animate>
    </React.Fragment>
  );

}



