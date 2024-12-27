import React, { useEffect, useState } from 'react'

import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import Chat from './Chat';
import Calculator from './Calculator';

const Whatapp = () => {

    const people = [
        {
            "img": "https://i.pinimg.com/474x/f6/be/82/f6be82307f2073d80357fd2b47da4048.jpg ",
            "name": "Rahul Sharma",
            "time": "10:30 AM",
            "sent": ["Hello, how are you?"],

            "recive": "I'm good, thanks!"
        },
        {
            "img": "https://i.pinimg.com/236x/08/81/ca/0881ca9b1b677d55689a6c3793fe0e3d.jpg",
            "name": "Priya Verma",
            "time": "11:00 AM",
            "sent": "Did you complete the project?",
            "recive": "Yes, I submitted it yesterday."
        },
        {
            "img": "https://i.pinimg.com/236x/87/f8/7b/87f87b149a1183d884e4131e965863b5.jpg",
            "name": "Amit Patel",
            "time": "9:15 AM",
            "sent": "Let's meet for coffee today.",
            "recive": "Sure, what time?"
        },
        {
            "img": "https://i.pinimg.com/236x/28/9c/13/289c13bd4395db48331758179ebf8ef7.jpg",
            "name": "Neha Singh",
            "time": "8:45 AM",
            "sent": "Are you coming to the event?",
            "recive": "Yes, I'll be there!"
        },
        {
            "img": "https://i.pinimg.com/236x/bb/74/ba/bb74bae0879782206e5970e65efcfaa6.jpg",
            "name": "Vikram Rao",
            "time": "7:30 AM",
            "sent": "Good morning!",
            "recive": "Good morning! Have a great day."
        },
        {
            "img": "https://i.pinimg.com/236x/d3/b0/bc/d3b0bcf3dcd5207114eb889ce7f5fced.jpg",
            "name": "Anjali Gupta",
            "time": "6:45 PM",
            "sent": "Can you send me the report?",
            "recive": "Sure, I'll send it shortly."
        },
        {
            "img": "https://i.pinimg.com/236x/36/f3/f2/36f3f2fb8425d4eebb64d14fe286a78b.jpg",
            "name": "Rohan Desai",
            "time": "5:30 PM",
            "sent": "Where are you?",
            "recive": "I'm on my way!"
        },
        {
            "img": "https://i.pinimg.com/236x/b5/84/62/b58462e2dd8a013104abd3a4a35e5328.jpg",
            "name": "Kavita Joshi",
            "time": "4:15 PM",
            "sent": "Let's catch up this weekend.",
            "recive": "Absolutely! Let's plan."
        },
        {
            "img": "https://i.pinimg.com/236x/9d/a3/1f/9da31f6b5db405fe5a4a0873da96c106.jpg",
            "name": "Siddharth Iyer",
            "time": "3:00 PM",
            "sent": "How was the meeting?",
            "recive": "It went well, thanks for asking!"
        },
        {
            "img": "https://i.pinimg.com/236x/ee/01/66/ee016604c99bc51a8b33564a25ae9a15.jpg",
            "name": "Meera Nair",
            "time": "1:45 PM",
            "sent": "Can you call me later?",
            "recive": "Sure, I'll call you in the evening."
        }


    ]

    const [isVisible, setIsVisible] = useState(false)
    const [chatData, setchatData] = useState([])
    const [search, setsearch] = useState("")
    const [users, setusers] = useState([])
    const [filterUser, setfilterUser] = useState([])

    useEffect(() => {
        setusers(people)
        setfilterUser(people)


    }, [])


    function hendler(data) {
        setIsVisible(true)
        setchatData(data)
    }

    function changeHendler(e) {
        const value = e.target.value.toLowerCase();
        setsearch(value);

        if (value.trim() === "") {
            setusers(people);
        } else {
            const newArr = filterUser.filter((user) =>
                user.name.toLowerCase().includes(value)
            );
            setusers(newArr);
        }
    }


    return (
        <div className='md:flex'>

            <div className='md:w-1/2 bg-violet-400 flex flex-col gap-6 justify-center items-center h-screen'>
                <div className='text-4xl uppercase  font-bold text-black flex gap-7'>
                    <h1>11.<span>&#x29;</span></h1>
                    <h1 className=''>WhatsApp</h1>
                </div>
                <div className='h-[80vh] p-2 w-[50vh] rounded bg-white'>
                    {isVisible === true ? < Chat setVisible={setIsVisible} chatData={chatData} /> : <div>
                        <div className='w-full h-16  '>
                            <div className='flex h-full text-2xl items-center justify-between'>
                                <h1 className='text-[#40D45A] font-bold'> WhatsApp</h1>
                                <div className='flex gap-3'>
                                    <MdOutlineQrCodeScanner />
                                    <IoCameraOutline />
                                    <HiDotsVertical />
                                </div>
                            </div>
                        </div>
                        <input

                            type="text"
                            onChange={changeHendler}
                            value={search}
                            className='bg-gray-200 w-full py-2 rounded-full px-4'
                            placeholder='Ask Meta AI or Search' />
                        <div className='contaner overflow-y-auto h-[63vh]'>
                            {users.map((data, i) => (
                                <div key={i} className='w-full h-16 my-2'
                                    onClick={() => {
                                        hendler(data)
                                    }}>
                                    <div className='flex h-full  px-3 items-center justify-between'>
                                        <div className='h-14 w-14 overflow-hidden bg-blue-300 rounded-full'>
                                            <img className='w-full object-cover h-full' src={data.img} alt="" />
                                        </div>
                                        <h1>{data.name}</h1>
                                        <h1>{data.time}</h1>
                                    </div>
                                </div>
                            ))
                            }

                        </div>
                    </div>}
                </div>
            </div>
            <Calculator />
        </div>
    )
}

export default Whatapp
