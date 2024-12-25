import React, { useState } from 'react'
import RemoveFriend from './RemoveFriend'

const KeyboardEvent = () => {

    const [right, setright] = useState(0)
    const [top, setTop] = useState(0)
    function keyHendler(e) {
        if (e.code === "ArrowRight" && right < 63) {
            setright((prev) => prev + 1)

        }
        else if (e.code === "ArrowLeft" && right > 0) {
            setright((prev) => prev - 1)

        }
        else if (e.code === "ArrowUp" && top < 63) {
            setTop((prev) => prev + 1)
        }

        else if (e.code === "ArrowDown" && top > 0) {
            setTop((prev) => prev - 1)
        }


        console.log(e);

    }
    return (
        <div className='md:flex'>
            <div tabIndex="0" onKeyDown={keyHendler} className='md:w-1/2 relative h-screen bg-sky-400'>
                <div className='text-4xl w-full py-10 justify-center uppercase font-bold text-white flex gap-7'>
                    <h1>9.<span>&#x29;</span></h1>
                    <h1 className=''>Keyword Event ( &larr;,&uarr;,&rarr;,&darr;)</h1>
                </div>
                <img fetchpriority="high"
                    style={{
                        left: `${right}%`,
                        bottom: `${top}%`
                    }}
                    className='w-72 absolute'
                    src="https://png.pngtree.com/png-vector/20240919/ourmid/pngtree-d-santa-claus-in-a-sleigh-pulled-by-reindeer-carrying-gifts-png-image_13846943.png" decoding="async" alt=""></img>
            </div>
            <RemoveFriend />
        </div>
    )
}

export default KeyboardEvent
