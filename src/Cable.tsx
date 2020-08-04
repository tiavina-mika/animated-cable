import React, { FC } from "react";
import { createUseStyles } from 'react-jss';
import CablePath from "./CablePath";

const useStyles = createUseStyles({
  main: {fillRule:'evenodd'},
});

type Props = {
  id?: string;
  femalePathD?: string;
  malePathD?: string;
  femalePathGradientD?: string; 
  y?: boolean;
}
const Cable: FC<Props> = ({
  femalePathD,
  malePathD,
  femalePathGradientD,
  id,
  y
}) => {
  const classes = useStyles();
  return (
      <g id={`animated-cable-${id}`}>
          <g id="malecable-3" data-name="malecable">
              <CablePath
                  d={femalePathD}
                  y={y}
              />
              {/* gradient */}
              <CablePath
                  d={femalePathGradientD}
                  className={classes.main}
                  fill={`url(#animatedplug-lg-${id}-male`}
                  y={y}
              />
          </g>
          <g id="animatedfemalecable-3" data-name="animatedfemalecable">
              {/* gradient */}
              <CablePath
                  id={'path-2'+id}
                  dataName='path-2'
                  d={malePathD}
                  female
                  y={y}
              />
              <CablePath
                  id={'path-2'+id}
                  dataName='path-2'
                  fill={`url(#animatedplug-lg-${id}-female`}
                  className={classes.main}
                  d={malePathD}
                  female
                  y={y}
              />
          </g>
      </g>
  );
}

export default Cable;
