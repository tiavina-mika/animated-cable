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
    const offsetX: number = female ? -18 : 16;
    let initial: InitialI = {
        translateY, 
        translateX: female ? translateX + 3 : translateX - 9
    }
    let animate: AnimateI = { translateX: translateX + offsetX };

    if (y) {
        const offsetY = female ? 10 : -10;
        initial = {
          translateX, 
          translateY: female ? translateY - 6 : translateY + 6
        };
        animate = { translateY: translateY + offsetY }
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
                  duration: 1.8,
                  loop: Infinity,
                  ease: 'easeOut',
                  // delay: 1005
                  // stiffness: 100,
              }}
          />
    );
}

export default CablePath;
