import React, { FC } from "react";
import CablePath from "./CablePath";

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
                  male
                  y={y}
              />
              <CablePath
                  id={'path-2'+id}
                  dataName='path-2'
                  fill={`url(#animatedplug-lg-${id}-female`}
                  d={malePathD}
                  male
                  y={y}
              />
          </g>
      </g>
  );
}

export default Cable;
