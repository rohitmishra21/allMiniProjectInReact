import React from 'react'
import { BiSolidVideo } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { FaMicrophone } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
const Chat = ({ setVisible, chatData }) => {


    return (
        <div className='h-fullw-full '>
            <div className='w-full h-16 bg-white'>
                <div className='flex h-full text-xl items-center justify-between'>
                    <div className='flex items-center gap-2 '>
                        <IoMdArrowRoundBack onClick={() => { setVisible(false) }} />
                        <div className='h-10 w-10 overflow-hidden bg-blue-300 rounded-full'>
                            <img className='w-full object-cover h-full' src={chatData.img} alt="" />

                        </div>
                        <h1>{chatData.name}</h1>
                    </div>
                    <div className='flex gap-3'>
                        <BiSolidVideo />
                        <IoMdCall />
                        <HiDotsVertical />
                    </div>
                </div>
            </div>
            <div className='chatSection  px-2 bg-cover bg-center bg-[url("https://i.pinimg.com/564x/d2/a7/76/d2a77609f5d97b9081b117c8f699bd37.jpg")] h-[63vh] overflow-auto'>
                <div className='flex  flex-col items-start'>
                    <h1 className='bg-white my-2 px-3 py-1 rounded'>{chatData.sent} </h1>
                </div>
                <div className=' flex justify-end flex-col gap-3 items-end'>
                    <h1 className='bg-[#40D45A]  px-2 py-1 rounded'>{chatData.recive}</h1>
                </div>
            </div>
            <div className='flex items-center gap-2'> <input type="text" className='w-full border-2 border-black rounded-full py-2' placeholder='message' />
                <div className='w-14 rounded-full flex justify-center items-center h-12 bg-[#40D45A]'>
                    <FaMicrophone />
                </div>
            </div>
        </div>
    )
}

export default Chat
