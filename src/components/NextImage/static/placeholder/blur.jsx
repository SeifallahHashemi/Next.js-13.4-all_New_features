"use client"
import React from 'react';
import Image from "next/image";
import {useInView} from "react-intersection-observer";

const Blur = ({ src }) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    return (
        <div className={'w-80 h-96 relative mx-auto my-16 mb-10 overflow-hidden'} ref={ref}>
            <Image src={src} alt={'DefaultBlur'} fill priority style={{
                opacity: inView ? 1 : 0,
                transition: "opacity 2s cubic-bezier(0.3, 0.2, 0.2, 0.8)"
            }}/>
            <div className={'relative w-full h-full bg-cyan-800 top-0 z-10'} style={{
                transition: "left 1s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
                left: inView ? "100%" : "0%"
            }}></div>
        </div>
    );
};

export default Blur;