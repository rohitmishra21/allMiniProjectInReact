import React, { useState } from 'react'

const RemoveFriend = () => {
    const [isFriend, setisFriend] = useState(false)


    return (
        <div className='md:w-1/2'>
            <div className=' bg-lime-400 flex flex-col w-full  justify-center gap-16 items-center h-screen'>
                <div className='text-4xl w-full justify-center uppercase font-bold text-white flex gap-7'>
                    <h1>10.<span>&#x29;</span></h1>
                    <h1 className=''>sending request</h1>
                </div>
                <div className='w-96 flex flex-col px-2 justify-center gap-3 items-center h-[70vh] rounded bg-white'>
                    <div className='md:w-40 w-16 h-16 md:h-40  rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTR8fHxlbnwwfHx8fHw%3D" alt="" />
                    </div>
                    <h1 className='text-2xl uppercase font-bold'>santa claus</h1>
                    <p className='text-center text-lg px-2'>Santa Claus is a legendary figure originating in Western Christian culture who is said to bring gifts during the late evening and overnight hours on ...</p>
                    <button
                        onClick={() => {
                            setisFriend((p) => !p)
                        }}

                        className='w-full rounded font-semibold  uppercase text-white  py-1'
                        style={{
                            backgroundColor: isFriend ? "green" : "black"
                        }}

                    >{isFriend ? "friend" : "add friend"}</button>
                    <button
                        onClick={() => {
                            setisFriend((p) => !p)
                        }}

                        className='w-full rounded font-semibold uppercase bg-red-700 text-white py-1'
                        style={{
                            display: isFriend ? "block" : "none"
                        }}

                    >remove friend</button>
                </div>
            </div>
        </div>
    )
}

export default RemoveFriend
