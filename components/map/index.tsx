import React, { Dispatch, SetStateAction, useState } from 'react'
import { useTheme } from 'next-themes';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    Marker
} from "react-simple-maps";

interface MapProps {
    setContent: Dispatch<SetStateAction<JSX.Element>>
}

type markersTypes = {
    markerOffset: number,
    markerYOffset: number,
    name: string,
    acerage: string
    coordinates: any,
    mapImg: JSX.Element
}

type annotationTypes = {
    coordinates: any,
    dx: number,
    dy: number,
}

const markers: markersTypes[] = [
    // {
    //     markerOffset: -210,
    //     markerYOffset: -10,
    //     name: "Fox Creek, Alberta, Canada",
    //     acerage: "(583,952 acres)",
    //     coordinates: [-116.79502835738636, 54.39761248388819],
    //     mapImg: (
    //         <div className='h-[400px] w-32 md:w-72 border-2 border-primaryColor rounded-md'>
    //             <iframe
    //                 style={{ width: "100%", height: "100%" }}
    //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4495.284040462123!2d-116.79742373751738!3d54.396184368988614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84f7e230138a9c55!2zNTTCsDIzJzUxLjAiTiAxMTbCsDQ3JzQyLjAiVw!5e1!3m2!1sen!2sin!4v1664452379618!5m2!1sen!2sin"
    //                 loading="lazy"
    //             >
    //             </iframe>
    //         </div>
    //     )
    // },
    {
        markerOffset: 15,
        markerYOffset: -20,
        name: "Akali Lake Valley, Nevada, USA",
        acerage: "(8,825 acres)",
        coordinates: [-119.84732024641305, 41.71314416252361],
        mapImg: (
            <div className='h-[400px] w-32 md:w-72 border-2 border-primaryColor rounded-md'>
                <iframe
                    style={{ width: "100%", height: "100%" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60226.03345774173!2d-119.8896263376504!3d41.72070168421398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5782ad9e0813cd7f!2zNDHCsDQyJzQyLjAiTiAxMTnCsDUwJzQ5LjAiVw!5e1!3m2!1sen!2sin!4v1664451088298!5m2!1sen!2sin"
                    loading="lazy"
                >
                </iframe>
            </div>

        )
    },
    {
        markerOffset: -210,
        markerYOffset: -10,
        name: "Teels Marsh, Nevada, USA",
        acerage: "(7,914 acres)",
        coordinates: [-118.34694327503382, 38.20556233485941],
        mapImg: (
            <div className='h-[400px] w-32 md:w-72 border-2 border-primaryColor rounded-md'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52923.32364990205!2d-118.38828463459622!3d38.21962347022427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x641e9fcebc1bd014!2zMzjCsDEyJzIwLjAiTiAxMTjCsDIwJzQ5LjAiVw!5e1!3m2!1sen!2sin!4v1664453030956!5m2!1sen!2sin" 
                    style={{ width: "100%", height: "100%" }}
                    loading="lazy" 
                >
                </iframe>
            </div>
        )
    },
    {
        markerOffset: -210,
        markerYOffset: -10,
        name: "Guayatayoc, Jujuy, Argentina",
        acerage: "(230,000 acres)",
        coordinates: [-66.21195190525212, -23.964050144675575],
        mapImg: <div className='h-[400px] w-32 md:w-72 border-2 border-primaryColor rounded-md'>
            <iframe 
                style={{ width: "100%", height: "100%" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126702.44203729229!2d-66.25291198248605!3d-23.98186383360072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x347bee773b7d5307!2zMjPCsDU3JzUzLjAiUyA2NsKwMTInNDMuMCJX!5e1!3m2!1sen!2sin!4v1664452680707!5m2!1sen!2sin"
                loading="lazy" 
            > 
            </iframe>
        </div>
    },
];

const annotations: annotationTypes[] = [
    // {
    //     coordinates: [-116.79502835738636, 54.39761248388819],
    //     dx: -20,
    //     dy: -8
    // },
    {
        coordinates: [-119.84732024641305, 41.71314416252361],
        dx: 23,
        dy: -17
    },
    {
        coordinates: [-118.34694327503382, 38.20556233485941],
        dx: -20,
        dy: -8
    },
    {
        coordinates: [-66.21195190525212, -23.964050144675575],
        dx: -20,
        dy: -8
    }

]

const Map = ({ setContent }: MapProps) => {
    const { theme } = useTheme();
    return (
        <>
            <ComposableMap
                projection="geoAzimuthalEqualArea"
                projectionConfig={{
                    rotate: [100, -10, 0],
                    scale: 230
                }}
                style={{ height: "100%", width: "100%" }}
            >
                <Geographies geography="/geo1.json">
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={`${theme === 'light' ? "#3B3D40" : "#FFF8F3"}`}
                                stroke={`${theme === 'light' ? "#3B3D40" : "#FFF8F3"}`}
                            />
                        ))
                    }
                </Geographies>
                <Geographies geography="/geo2.json">
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={`${theme === 'light' ? "#3B3D40" : "#FFF8F3"}`}
                                stroke={`${theme === 'light' ? "#3B3D40" : "#FFF8F3"}`}
                            />
                        ))
                    }
                </Geographies>
                {
                    annotations.map((annotation: annotationTypes, index: number) => (
                        <Annotation
                            key={index+1}
                            subject={annotation.coordinates}
                            dx={annotation.dx}
                            dy={annotation.dy}
                            connectorProps={{
                                stroke: "#F18628",
                                strokeWidth: 3,
                                strokeLinecap: "round"
                            }}
                        />
                    ))
                }
                {markers.map(({ name, coordinates, markerOffset, markerYOffset, mapImg, acerage }) => (
                    <>
                        <Marker key={name} coordinates={coordinates}>
                            <circle
                                r={5}
                                fill="#F18628"
                                stroke="#000"
                                strokeWidth={1}
                                style={{ cursor: "pointer" }}
                            />
                            <svg
                                data-tip=""
                                onMouseEnter={() => setContent(mapImg)}
                                onMouseLeave={() => setContent(<></>)}
                                style={{ cursor: "pointer" }}
                                x={markerOffset}
                                y={markerYOffset}
                                width="200"
                                height="51"
                                viewBox="0 0 225 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g filter="url(#filter0_b_557_2017)">
                                    <rect width="225" height="51" rx="8" fill="black" fillOpacity="0.48" />
                                    <text textAnchor="middle" x={110} y={20} fill='#FFF' style={{ cursor: "pointer" }}>{name}</text>
                                    <text textAnchor="middle" x={110+5} y={40} fill='#FFF' style={{ cursor: "pointer" }}>{acerage}</text>
                                    <rect x="1" y="1" width="223" height="50" rx="7" stroke="#F78222" strokeWidth="2" />
                                </g>
                                <defs>
                                    <filter id="filter0_b_557_2017" x="-6" y="-6" width="237" height="93" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImage" stdDeviation="3" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_557_2017" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_557_2017" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </Marker>
                    </>

                ))}
            </ComposableMap>
        </>
    )
}

export default Map