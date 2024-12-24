import React, { useState } from 'react'

const TeamSelector = () => {

    const [winTeam, setwinTeam] = useState([])
    const myTeam = [
        {
            name: "Mumbai",
            img: "https://i.pinimg.com/736x/47/3b/1b/473b1bc5f5b74aa7b43a6799daa24946.jpg"
        },
        {
            name: "RCB",
            img: "https://i.pinimg.com/736x/8c/6b/f3/8c6bf3cc76fddf94c2044a68c7787b8d.jpg"
        },
        {
            name: "Chennai ",
            img: "https://img.jagranjosh.com/images/2023/March/3032023/chennai-super-kings-players-list.webp"
        },
        {
            name: "KKR ",
            img: "https://wordpresscdn.winzogames.com/prod/blog/wp-content/uploads/2024/09/10063357/DALL%C2%B7E-2024-10-10-12.02.23-An-image-featuring-the-full-form-of-KKR-in-IPL-with-the-title-KKR-Full-Form_-What-is-the-Full-Form-of-KKR-in-IPL-The-design-prominently-displays-t-768x768.webp"
        },
        {
            name: "Rajasthan Royals",
            img: "https://upload.wikimedia.org/wikipedia/hi/6/60/Rajasthan_Royals_Logo.svg"
        },
    ]

    function searchHendler() {
        const team = Math.floor(Math.random() * 3)
        const win = myTeam[team]
        setwinTeam(win)
    }


    return (
        <div className='md:w-1/2 h-screen flex flex-col gap-16   bg-gray-400 items-center justify-center'>
            <div className='text-4xl uppercase  font-bold text-black flex gap-7'>
                <h1>4.<span>&#x29;</span></h1>
                <h1 className=''>Team Selector</h1>
            </div>
            <div className=' h-[50vh] '>
                <div className=' flex flex-col px-2 justify-center gap-8 h-full items-center bg-cover bg-center bg-[url()] '>
                    {winTeam.length === 0 ? <img className='h-full object-cover' src="https://i.pinimg.com/736x/dc/65/ab/dc65abff17d3130577bdf72777f8e8d9.jpg" alt="" /> : <img className='w-96 h-[100%] object-cover' src={winTeam.img} alt="" />}

                </div>
                <button onClick={searchHendler} className='text-black bg-white  mt-4  w-96 text-2xl py-2 uppercase '>{winTeam.length === 0 ? " which team is win in 2025🙄" : `${winTeam.name} is win in 2025🙄 `}</button>
            </div>
        </div>

    )
}

export default TeamSelector
