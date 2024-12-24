import React, { useState } from 'react'
import { useRef } from 'react';
import { RiLightbulbFlashFill } from "react-icons/ri";
import FriendRequest from './FriendRequest';
const Bulb = () => {
    const [bulb, setBulb] = useState(false)

    function clickHendler() {
        setBulb((p) => !p)
        console.log(bulb);

    }
    return (

        <>
            <div className='md:flex '>
                <div className='bg-zinc-900  md:w-1/2 w-full h-screen flex flex-col justify-center items-center gap-3'>
                    <div className='text-4xl uppercase font-bold text-white flex gap-7'>
                        <h1>1.<span>&#x29;</span></h1>
                        <h1 className=''>toogle bulb</h1>
                    </div>
                    <div>
                        <RiLightbulbFlashFill size={300} md:size={500}
                            style={{
                                color: bulb ? "yellow" : "white"
                            }} />
                    </div>
                    <div>
                        <div onClick={clickHendler} className='h-20 w-48 bg-gray-200 rounded-full'>
                            <div className='h-full w-20  transition-all duration-300 rounded-full'
                                style={{
                                    transform: bulb ? "translateX(140%)" : "translateX(0%)",
                                    backgroundColor: bulb ? "yellow" : "transparent",
                                    border: bulb ? "none" : "4px solid black"
                                }}
                            ></div>
                        </div>
                    </div>
                </div >
                <FriendRequest />
            </div>
        </>
    )
}

export default Bulb
