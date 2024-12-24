import React, { useState } from 'react'
import { useRef } from 'react';
import { IoLogoTwitter } from "react-icons/io";
import TeamSelector from './TeamSelector';
const ColorGenerator = () => {

    const colorRef = useRef(null)

    function bgHendler() {
        const val1 = Math.floor(Math.random() * 256)
        const val2 = Math.floor(Math.random() * 256)
        const val3 = Math.floor(Math.random() * 256)

        colorRef.current.style.color = ` rgb(${val1},${val2},${val3})`;
    }
    return (
        <div className='md:flex'>
            <div className='md:w-1/2 h-screen flex flex-col justify-center items-center'>
                <div className=' text-4xl uppercase font-bold text-black flex gap-7'>
                    <h1>3.<span>&#x29;</span></h1>
                    <h1 className=''>Color Genrator</h1>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div ref={colorRef} >  <IoLogoTwitter size={300} md:size={500} className='' /></div>

                    <button onClick={bgHendler} className='border-black border  w-1/2 uppercase text-lg tracking-wider font-serif  py-4'>change the color of bird</button>
                </div>
            </div>
            <TeamSelector />
        </div>
    )
}

export default ColorGenerator
