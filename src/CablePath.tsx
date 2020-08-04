import React, { FC } from "react";
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

const useStyles = createUseStyles({
    noGradient:{fill:'#010101'},
});

const translateX = -32.04;
const translateY = -26.04;

interface InitialI {
  translateX: number;
  translateY: number;
};
interface AnimateI {
  translateX?: number;
  translateY?: number;
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
    const offset: number = female ? -10 : 5;
    let initial: InitialI = {
        translateY, 
        translateX: female ? translateX + 7 : translateX - 7
    }
    let animate: AnimateI = { translateX: translateX + offset };

    if (y) {
        initial = {
          translateX, 
          translateY: female ? translateY + 7 : translateY - 7
        };
        animate = { translateY: translateY + offset }
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
                  duration: 1.1,
                  loop: Infinity,
                  ease: 'linear',
                  stiffness: 100,
              }}
          />
    );
}

export default CablePath;
