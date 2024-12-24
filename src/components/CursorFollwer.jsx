import React from 'react'
import { useRef } from 'react'

const CursorFollwer = () => {

    const cursorRef = useRef(null)

    function moveHendler(dets) {
        console.log(dets);
        cursorRef.current.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    }
    return (
        <div onMouseMove={moveHendler} className='md:w-1/2  h-screen relative bg-black'>

            <div ref={cursorRef} className='w-10 h-10 transition-all duration-100 bg-white rounded-full absolute'></div>
        </div>
    )
}

export default CursorFollwer
