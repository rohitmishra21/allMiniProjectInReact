import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

const ImgScroll = () => {

    const newArr = [
        "https://images.unsplash.com/photo-1608086042577-50e786b68c84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734187255412-83404a7d16da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1606916929342-fef8a9b43f25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
        
    ];

    const [add, setAdd] = useState(0);

    function rightHandler() {
        setAdd((prev) => prev < newArr.length - 1 ? prev + 1 : prev)
    }

    function leftHandler() {
        setAdd((prev) => prev > 0 ? prev - 1 : prev)
    }

    return (
        <div className='md:w-1/2'>
            <div className='bg-red-400 flex-col w-full justify-center gap-16 items-center h-screen'>
                <div className='text-4xl w-full py-10 justify-center uppercase font-bold text-white flex gap-7'>
                    <h1>8.<span>&#x29;</span></h1>
                    <h1 className=''>Image Swapper</h1>
                </div>
                <div className='flex justify-center gap-10 items-center h-[80vh] w-full'>
                    <div onClick={leftHandler} className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-black cursor-pointer'>
                        <FaArrowLeft />
                    </div>
                    <div className='w-96 flex flex-col px-2 py-6 justify-center gap-8 items-center h-[70vh] rounded '>
                        <img className='w-full h-full object-cover' src={newArr[add]} alt="Displayed" />
                    </div>
                    <div onClick={rightHandler} className='w-16 h-16 flex justify-center items-center rounded-full border-2 border-black cursor-pointer'>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgScroll;
