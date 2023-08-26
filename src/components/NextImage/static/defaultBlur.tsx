import React from 'react';
import Image from "next/image";
import {Props} from "../../../../typing";

function DefaultBlur({ src }: Props) {
    return (
        <div className={'w-80 h-96 relative mx-auto my-4'}>
            <Image src={src} alt={'DefaultBlur'} fill className={'object-cover'} placeholder={"blur"}/>
        </div>
    );
}

export default DefaultBlur;