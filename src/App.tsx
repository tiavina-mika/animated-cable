import React from "react";
import { createUseStyles } from 'react-jss';
import Cable from "./Cable";

const useStyles = createUseStyles({
    cls1: { fill: '#010101', fillRule: 'evenodd' },
    cls6: { stroke: '#ececec', strokeWidth: 0.71, fill: '#fff' },
    cls7: { fill: '#9da9b7' },
    cls10: { fill: '#09274b', opacity: 0.4, isolation: 'isolate' },
    cls11: { fillRule: 'evenodd' },
    cls12: { fillRule: 'evenodd', fill: '#fff' },
    cls13: { stroke: '#e5e5e5', fill: 'url(#animated-lg-square-center-icon)', fillRule: 'evenodd' },
    cls14: { fill: 'url(#animated-lg-infinite-icon)', fillRule: 'evenodd' },
});

const App = () => {
  const classes = useStyles();
  return (
      <svg
      id="animated-plug-svg" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="671.91" 
      height="354.96" 
      viewBox="0 0 671.91 354.96">
        <defs>
            {/* <linearGradient id="animated-linear-gradient" x1="339.47" y1="-210.84" x2="339.47" y2="-210.31" gradientTransform="translate(-50556.45 -11697.06) rotate(45.11) scale(130.71 130.71)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#49b750"/>
                <stop offset="1" stopColor="#15a74a"/>
            </linearGradient> */}
            <linearGradient id="animatedplug-lg-left-female" x1="338.98" y1="-210.36" x2="338.98" y2="-209.85" gradientTransform="translate(-50559.3 -11684.87) rotate(45.09) scale(130.71 130.71)" xlinkHref="#animated-linear-gradient"/>
            <linearGradient 
                id="animatedplug-lg-left-male" 
                x1="341.11" 
                y1="-212.49" 
                x2="341.11" 
                y2="-211.96" 
                xlinkHref="#animated-linear-gradient"/>
 
            {/* right cable */}
            <linearGradient 
                id="animatedplug-lg-right-male" 
                x1="341.11" 
                y1="-212.49" 
                x2="341.11" 
                y2="-211.96" 
                xlinkHref="#animated-linear-gradient"/>
            <linearGradient
                id="animatedplug-lg-right-female" 
                x1="340.62" 
                y1="-212" 
                x2="340.62" 
                y2="-211.5" 
                gradientTransform="translate(-50559.3 -11684.87) rotate(45.09) scale(130.71 130.71)" xlinkHref="#animated-linear-gradient"/>
            {/* top cable */}
            <linearGradient
                id="animatedplug-lg-top-male"
                x1="340.95" 
                y1="-210.71" 
                x2="340.95" 
                y2="-210.18"
                 gradientTransform="translate(-11786.47 51077.88) rotate(-44.89) scale(130.71 130.71)" xlinkHref="#animated-linear-gradient"/>
            <linearGradient
                id="animatedplug-lg-top-female"
                x1="340.46" 
                y1="-210.23" 
                x2="340.46" 
                y2="-209.72" 
                gradientTransform="translate(-11774.29 51080.74) rotate(-44.91) scale(130.71 130.71)" xlinkHref="#animated-linear-gradient"/>
            
            <linearGradient id="animated-lg-square-center-icon" x1="153.23" y1="37.12" x2="153.23" y2="38.12" gradientTransform="translate(-20929.5 -4917.98) scale(139)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#f4f4f4" stopOpacity="0"/>
                <stop offset="1" stopColor="#f4f4f4"/>
            </linearGradient>
            <linearGradient id="animated-lg-infinite-icon" x1="150" y1="33.37" x2="150" y2="34.37" gradientTransform="translate(-10131 -929.16) scale(70 36.59)" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0fcc4f"/>
                <stop offset="1" stopColor="#05a73c"/>
            </linearGradient>
        </defs>
        {/* left cable */}
        <Cable
            id='left'
            femalePathD="M308.65,310.08a2,2,0,0,1-2,2h0L238.84,312l0,2.14a2.12,2.12,0,0,1-2.09,2.07h-4.89l-6.57,1.64a1.4,1.4,0,0,1-1.7-1,1.34,1.34,0,0,1,0-.35v-.28h-5.4a2.08,2.08,0,0,1,0-4.16h5.4v-4.15l-5.39,0a2.07,2.07,0,1,1,0-4.13h5.38v-.3A1.41,1.41,0,0,1,225,302a1.24,1.24,0,0,1,.33,0l6.57,1.66h4.89a2,2,0,0,1,2.05,2.07V308l67.83.12A2,2,0,0,1,308.65,310.08Z"
            femalePathGradientD="M225.31,317.79a1.4,1.4,0,0,1-1.7-1,1.34,1.34,0,0,1,0-.35v-.28h-5.4a2.08,2.08,0,0,1,0-4.16h5.4v-4.15l-5.39,0a2.07,2.07,0,1,1,0-4.13h5.38v-.3A1.41,1.41,0,0,1,225,302a1.24,1.24,0,0,1,.33,0l6.57,1.66h4.89a2,2,0,0,1,2.05,2.07V308l67.83.12a2,2,0,0,1,0,4h0l-67.83-.12,0,2.14a2.12,2.12,0,0,1-2.09,2.07"            
            malePathD="M210.76,303.39a1.32,1.32,0,0,1,0,.34l0,13.24a1.42,1.42,0,0,1-1.41,1.4,1.19,1.19,0,0,1-.33,0l-6.67-1.67H197.4a2.13,2.13,0,0,1-2.11-2.12l0-2.06-67.79-.1a2.15,2.15,0,0,1,0-4.3h0l67.79.1,0-2.06a2.11,2.11,0,0,1,2.11-2.09h5l6.66-1.66A1.4,1.4,0,0,1,210.76,303.39Z"             
         />
        {/* right cable */}
        <Cable
            id='right'
            femalePathD="M612.29,310.08a2,2,0,0,1-2,2h0L542.48,312v2.14a2.11,2.11,0,0,1-2.08,2.07h-4.89l-6.58,1.64a1.39,1.39,0,0,1-1.69-1,1.34,1.34,0,0,1,0-.35v-.28h-5.4a2.08,2.08,0,1,1,0-4.16h5.4v-4.15l-5.39,0a2.07,2.07,0,0,1,0-4.13h5.38v-.3a1.41,1.41,0,0,1,1.41-1.39,1.24,1.24,0,0,1,.33,0l6.57,1.66h4.89a2.05,2.05,0,0,1,2.06,2.07V308l67.83.12A2,2,0,0,1,612.29,310.08Z" 
            femalePathGradientD="M528.94,317.79a1.39,1.39,0,0,1-1.69-1,1.34,1.34,0,0,1,0-.35v-.28h-5.4a2.08,2.08,0,1,1,0-4.16h5.4v-4.15l-5.39,0a2.07,2.07,0,0,1,0-4.13h5.38v-.3a1.41,1.41,0,0,1,1.41-1.39,1.24,1.24,0,0,1,.33,0l6.57,1.66h4.89a2.05,2.05,0,0,1,2.06,2.07V308l67.83.12a2,2,0,0,1,0,4h0l-67.83-.12v2.14a2.11,2.11,0,0,1-2.08,2.07" 
            malePathD="M514.39,303.39a1.32,1.32,0,0,1,0,.34l0,13.24a1.4,1.4,0,0,1-1.4,1.4,1.19,1.19,0,0,1-.33,0L506,316.66h-5a2.13,2.13,0,0,1-2.11-2.12l0-2.06-67.79-.1a2.15,2.15,0,0,1,0-4.3h0l67.79.1,0-2.06a2.1,2.1,0,0,1,2.1-2.09h5l6.66-1.66A1.4,1.4,0,0,1,514.39,303.39Z" 
         /> 
        {/* left icon */}
        <g id="animated-plug-left-icon">
            <g id="animated-group-32-Copy">
                <circle id="Oval-Copy-13" className={classes.cls6} cx="49.96" cy="283.96" r="49.6"/>
                <path id="Path" className={classes.cls7} d="M93.8,307.9,80.4,333.5c-.2.4-.5.5-1,.5a1.07,1.07,0,0,1-1.1-1.3L80.8,317a1.07,1.07,0,0,0-1.1-1.2H71a1.11,1.11,0,0,1-1-1.6l13.4-25.7c.2-.4.5-.5,1-.5a1.07,1.07,0,0,1,1.1,1.3L83.1,305a1.16,1.16,0,0,0,1.1,1.3h8.7A1,1,0,0,1,93.8,307.9Z" transform="translate(-32.04 -26.04)"/>
            </g>
        </g>
        {/* top cable */}
        <Cable
            id='top'
            femalePathD="M369.16,88.65a2,2,0,0,1,2,2h0L371,158.47l2.14,0a2.1,2.1,0,0,1,2.07,2.08v4.89l1.64,6.58a1.4,1.4,0,0,1-1,1.7,1,1,0,0,1-.35,0h-.28v5.4a2.08,2.08,0,0,1-4.16,0v-5.4h-4.15l0,5.39a2,2,0,0,1-2.06,2.06,2.07,2.07,0,0,1-2.07-2.08v-5.38h-.3a1.41,1.41,0,0,1-1.39-1.41,1.24,1.24,0,0,1,0-.33l1.66-6.57v-4.89a2,2,0,0,1,2.07-2.05H367l.12-67.83A2,2,0,0,1,369.16,88.65Z" 
            femalePathGradientD="M376.86,172a1.4,1.4,0,0,1-1,1.7,1,1,0,0,1-.35,0h-.28v5.4a2.08,2.08,0,0,1-4.16,0v-5.4h-4.15l0,5.39a2,2,0,0,1-2.06,2.06,2.07,2.07,0,0,1-2.07-2.08v-5.38h-.3a1.41,1.41,0,0,1-1.39-1.41,1.24,1.24,0,0,1,0-.33l1.66-6.57v-4.89a2,2,0,0,1,2.07-2.05H367l.12-67.83a2,2,0,1,1,4,0h0L371,158.47l2.14,0a2.1,2.1,0,0,1,2.07,2.08"             
            malePathD="M362.46,186.55a1.32,1.32,0,0,1,.34,0l13.24,0a1.41,1.41,0,0,1,1.4,1.41,1.19,1.19,0,0,1,0,.33L375.73,195v4.95a2.12,2.12,0,0,1-2.11,2.11l-2.06,0-.1,67.79a2.16,2.16,0,0,1-2.16,2.15,2.13,2.13,0,0,1-2.14-2.14h0l.1-67.79-2.06,0a2.12,2.12,0,0,1-2.1-2.11v-5l-1.66-6.66A1.4,1.4,0,0,1,362.46,186.55Z"            
            y
         />
        {/* top icon */}
        <g id="animated-plug-top-icon">
            <g id="animated-group-30">
                <circle id="Oval-Copy-10" className={classes.cls6} cx="337.96" cy="49.96" r="49.6"/>
                <path id="Shape" className={classes.cls10} d="M355.9,54a5.9,5.9,0,1,0,5.9,5.9A6,6,0,0,0,355.9,54Zm0,2.9a2.9,2.9,0,1,1-2.9,2.9A2.84,2.84,0,0,1,355.9,56.9Zm2.7,10.3h0a1.72,1.72,0,0,0-1.2,1l-7.3,20.1a1.55,1.55,0,0,0,1.4,2h17.1v4.9h-4.5a1.45,1.45,0,0,0,.1,2.9h11.7a1.5,1.5,0,0,0,0-3h-4.4V90.2h17.1a1.61,1.61,0,0,0,1.4-2l-7.3-20.1a1.42,1.42,0,0,0-1.4-.9c-7.6-.1-15.2.1-22.7,0Zm1.2,2.9h4.7l-.5,3.4h-5.4Zm7.6,0h6.1l.5,3.4h-7.2Zm9.1,0h3.7l1.3,3.4H377Zm-19,6.4h6l-.6,3.9h-6.8Zm9,0h8.1l.6,3.9h-9.3Zm11,0h5l1.4,3.9H378ZM355,83.3h7.5l-.6,3.9h-8.3Zm10.4,0h10.2l.6,3.9H364.8Zm13.1,0H385l1.4,3.9h-7.3Z" transform="translate(-32.04 -26.04)"/>
            </g>
        </g>
        {/* right icon */}
        <g id="animated-plug-right-icon">
            <g id="animated-group-32">
                <circle id="Oval-Copy-13-2" data-name="Oval-Copy-13" className={classes.cls6} cx="621.96" cy="283.96" r="49.6"/>
                <path id="Shape-2" data-name="Shape" className={classes.cls10} d="M673.4,307.1l-18.3-14.7a1.66,1.66,0,0,0-2.1,0l-18.4,14.7a1.57,1.57,0,0,0-.6,1.5,1.63,1.63,0,0,0,1.1,1.3,1.53,1.53,0,0,0,1.6-.3l2.3-1.8v15.3a4.93,4.93,0,0,0,5,4.9h20a4.93,4.93,0,0,0,5-4.9V307.8l2.3,1.8a1.61,1.61,0,0,0,1.6.3,1.63,1.63,0,0,0,1.1-1.3,1.72,1.72,0,0,0-.6-1.5Zm-22.7,17.6v-8.2a1.61,1.61,0,0,1,1.7-1.6h3.3a1.67,1.67,0,0,1,1.7,1.6v8.2Zm15-1.6a1.61,1.61,0,0,1-1.7,1.6h-3.3v-8.2a4.93,4.93,0,0,0-5-4.9h-3.3a4.93,4.93,0,0,0-5,4.9v8.2H644a1.67,1.67,0,0,1-1.7-1.6v-18l11.7-9.3,11.7,9.4Z" transform="translate(-32.04 -26.04)"/>
            </g>
        </g>
        {/* center icon */}
        <g id="center-icon">
            <g id="animated-center-square">
                <path id="path-10" className={classes.cls11} d="M307,241H431a8,8,0,0,1,8,8V373a8,8,0,0,1-8,8H307a8,8,0,0,1-8-8V249A8,8,0,0,1,307,241Z" transform="translate(-32.04 -26.04)"/>
                <path id="path-10-2" data-name="path-10" className={classes.cls12} d="M307,241H431a8,8,0,0,1,8,8V373a8,8,0,0,1-8,8H307a8,8,0,0,1-8-8V249A8,8,0,0,1,307,241Z" transform="translate(-32.04 -26.04)"/>
                <path className={classes.cls13} d="M307.5,241.5h123a8,8,0,0,1,8,8v123a8,8,0,0,1-8,8h-123a8,8,0,0,1-8-8v-123A8,8,0,0,1,307.5,241.5Z" transform="translate(-32.04 -26.04)"/>
            </g>
            <g id="center-infinite-icon">
                <path id="path-13" className={classes.cls11} d="M351.7,292a17.68,17.68,0,0,1,16.4,11.4,28.23,28.23,0,0,1,6.7-7.8,18.44,18.44,0,0,1,20.5-.7c6.2,3.8,9.5,11.5,8.5,18.8a17.14,17.14,0,0,1-6.7,11.1,15.45,15.45,0,0,1-9.1,3.8h-2a15.53,15.53,0,0,1-3.7-.4,20.91,20.91,0,0,1-7-2.5,16.37,16.37,0,0,1-4.9-3.1,28.45,28.45,0,0,0,3.8-4.9c3.5,2.3,7.5,4.5,11.7,4.3a12.11,12.11,0,0,0,10-7.8,11.12,11.12,0,0,0-16.2-13.1c-4.1,2.5-6.1,7.3-8.2,11.5a32,32,0,0,1-5.4,8.3,19.15,19.15,0,0,1-7.5,4.9,20.32,20.32,0,0,1-6.9,1.5,17.65,17.65,0,1,1,0-35.3Zm-.1,7a10.6,10.6,0,1,0,.2,21.2,10.46,10.46,0,0,0,10.5-10.6A10.89,10.89,0,0,0,351.6,299Zm33.9,6.5a5.61,5.61,0,1,1-1.7,11.1,5.57,5.57,0,0,1-4.7-6.4A5.67,5.67,0,0,1,385.5,305.5Z" transform="translate(-32.04 -26.04)"/>
                <path id="path-13-2" data-name="path-13" className={classes.cls14} d="M351.7,292a17.68,17.68,0,0,1,16.4,11.4,28.23,28.23,0,0,1,6.7-7.8,18.44,18.44,0,0,1,20.5-.7c6.2,3.8,9.5,11.5,8.5,18.8a17.14,17.14,0,0,1-6.7,11.1,15.45,15.45,0,0,1-9.1,3.8h-2a15.53,15.53,0,0,1-3.7-.4,20.91,20.91,0,0,1-7-2.5,16.37,16.37,0,0,1-4.9-3.1,28.45,28.45,0,0,0,3.8-4.9c3.5,2.3,7.5,4.5,11.7,4.3a12.11,12.11,0,0,0,10-7.8,11.12,11.12,0,0,0-16.2-13.1c-4.1,2.5-6.1,7.3-8.2,11.5a32,32,0,0,1-5.4,8.3,19.15,19.15,0,0,1-7.5,4.9,20.32,20.32,0,0,1-6.9,1.5,17.65,17.65,0,1,1,0-35.3Zm-.1,7a10.6,10.6,0,1,0,.2,21.2,10.46,10.46,0,0,0,10.5-10.6A10.89,10.89,0,0,0,351.6,299Zm33.9,6.5a5.61,5.61,0,1,1-1.7,11.1,5.57,5.57,0,0,1-4.7-6.4A5.67,5.67,0,0,1,385.5,305.5Z" transform="translate(-32.04 -26.04)"/>
            </g>
        </g>
    </svg>
  );
}

export default App;
