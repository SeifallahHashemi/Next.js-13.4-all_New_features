"use client"
import React from 'react';
import { stop } from "@/../utils/utils";

const About = async () => {
    const data = await stop("1", "ali");
    console.log(data)
    return (
        <div>
            About Page
        </div>
    );
};

export default About;