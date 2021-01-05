import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { useStyles } from "./styles";
import clsx from "clsx";
import {Animate} from "react-simple-animate";

export const Image = (props) => {
  const {src, alt, transitionTime = 2, className, isPreview} = props;
  const classes = useStyles();
  const classPreview = isPreview ? classes.loading : '';
  const filterWithBlur = {filter: 'blur(5px)' };
  const filterWithoutBlur = {filter: 'blur(0)' };
  return (
    <Animate
      play={true}
      duration={transitionTime}
      start={filterWithBlur}
      end={filterWithoutBlur}
    >
      <img src={src} alt={alt} className={clsx(classPreview, className)}/>
    </Animate>);
}



