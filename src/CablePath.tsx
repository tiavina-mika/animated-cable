import React, { FC } from "react";
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

const useStyles = createUseStyles({
    noGradient: { fill: '#15A74A' },
    gradient: { fillRule: 'evenodd' },
});

const translateX = -32.04;
const translateY = -26.04;

const transition = {
  //   duration: 1.8,
    // loop: Infinity,
  //   ease: 'easeOut',
    ease: [0.7, 0.1, 0.1, 0.7],
    duration: 1.2,
    repeatDelay: 1.2,
    yoyo: Infinity,
};
interface AnimationI {
  translateX: number;
  translateY: number;
};

type Props = {
    d?: string; 
    gradient?: string;
    fill?: string;
    id?: string;
    dataName?: string;
    y: boolean;
    male?: boolean;
}
const CablePath: FC<Props> = ({ 
  d, 
  gradient, 
  fill, 
  id, 
  dataName, 
  y,
  male
}) => {
    const classes = useStyles();
    const offsetX: number = male ? -18 : 16;
    const positionY: number = male ? translateY : translateY + 0.5;

    let initial: AnimationI = {
        translateY: positionY,
        translateX: translateX + offsetX,
    };
    let animate: AnimationI = {
        translateX: male ? translateX + 5.4 : translateX - 8,
        translateY: positionY,
    };

    /** vertical cable */
    if (y) {
        const offsetY: number = male ? 10 : -10;
        const positionX: number = male ? translateY - 0.2 : translateY;
        initial = {
            translateX: positionX,
            translateY: translateY + offsetY,
        };
        animate = {
            translateY: male ? translateY - 6.6 : translateY + 6.6,
            translateX: positionX,
        };
    }
    return (
          <motion.path 
              id={id}
              data-name={dataName}
              className={gradient ? classes.gradient : classes.noGradient}
              fill={fill}
              d={d}
              initial={initial}
              animate={animate}
              transition={transition}
          />
    );
}

export default CablePath;
