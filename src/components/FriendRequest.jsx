import React from 'react'
import { useRef } from 'react'

const FriendRequest = () => {

    const requestRef = useRef(null)
    function requestHendler() {
        requestRef.current.innerHTML = "sent Request..."
        setTimeout(() => {
            requestRef.current.innerHTML = "Accepted"
            requestRef.current.style.backgroundColor = "green"
        }, 2000);
    }
    return (
        <div className='md:w-1/2 bg-green-400 flex flex-col w-full  justify-center gap-16 items-center h-screen'>
            <div className='text-4xl w-full justify-center uppercase font-bold text-white flex gap-7'>
                <h1>2.<span>&#x29;</span></h1>
                <h1 className=''>sending request</h1>
            </div>
            <div className='w-96 flex flex-col px-2 py-6 justify-center gap-8 items-center h-2/3 rounded bg-blue-200'>
                <div className='md:w-40 w-20 h-20 md:h-40 bg-pink-400 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://storage.googleapis.com/pod_public/750/195756.jpg" alt="" />
                </div>
                <h1 className='text-2xl uppercase font-bold'>santa claus</h1>
                <p className='text-center text-lg px-2'>Santa Claus is a legendary figure originating in Western Christian culture who is said to bring gifts during the late evening and overnight hours on ...</p>
                <button onClick={requestHendler} ref={requestRef} className='w-full rounded font-semibold uppercase bg-black text-white py-4'>Add</button>
            </div>
        </div>
    )
}

export default FriendRequest
