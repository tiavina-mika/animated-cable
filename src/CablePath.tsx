import React, { FC } from "react";
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

const useStyles = createUseStyles({
    noGradient:{fill:'#010101'},
});

const translateX = -32.04;
const translateY = -26.04;

interface AnimationI {
  translateX: number;
  translateY: number;
};

type Props = {
    d?: string; 
    className?: string;
    fill?: string;
    id?: string;
    dataName?: string;
    y: boolean;
    female?: boolean;
}
const CablePath: FC<Props> = ({ 
  d, 
  className, 
  fill, 
  id, 
  dataName, 
  y,
  female
}) => {
    const classes = useStyles();
    const offsetX: number = female ? -18 : 16;
    let initial: AnimationI = {
        translateY, 
        translateX: female ? translateX + 5 : translateX - 9,
    }
    let animate: AnimationI = { translateX: translateX + offsetX, translateY };

    if (y) {
        const offsetY = female ? 10 : -10;
        initial = {
          translateX, 
          translateY: female ? translateY - 6 : translateY + 6
        };
        animate = { translateY: translateY + offsetY, translateX }
    }
    return (
          <motion.path 
              id={id}
              data-name={dataName}
              className={className ? className : classes.noGradient} 
              fill={fill}
              d={d}
              initial={initial}
              animate={animate}
              transition={{
                //   duration: 1.8,
                //   loop: Infinity,
                //   ease: 'easeOut',
                  ease: [0.7, 0.1, 0.1, 0.7],
                  duration: 1.2,
                  yoyo: Infinity,
              }}
          />
    );
}

export default CablePath;
