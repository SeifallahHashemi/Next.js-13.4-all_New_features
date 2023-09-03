'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Next13ProgressBar height="4px" color="#ff0000" options={{ showSpinner: true,trickle: true }} startPosition={0.1}/>
        </>
    );
};

export default Providers;