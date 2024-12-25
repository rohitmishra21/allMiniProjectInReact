import React, { useState } from 'react'
import ImgScroll from './ImgScroll'

const Story = () => {
    const [imgUrl, setImgUrl] = useState("")
    const [dpImgUrl, setDpImgUrl] = useState("")
    const [newStory, setnewStory] = useState([])
    const [visible, setVisible] = useState(false)
    const [fullStory, setFullStory] = useState([])
    function SubmitHendler(e) {
        e.preventDefault()
        const newArr = [...newStory, { imgUrl, dpImgUrl }]
        setnewStory(newArr)
        setDpImgUrl("")
        setImgUrl("")

    }

    function show(e) {
        setVisible((p) => !p)
        setFullStory(e)

        setTimeout(() => {
            setVisible(false)
        }, 2000);
    }
    return (
        <div className='md:flex'>
            <div className='flex justify-center md:w-1/2 flex-col gap-10 py-10 items-center h-screen bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'>
                <div className='text-4xl uppercase font-bold text-white flex gap-7'>
                    <h1>7.<span>&#x29;</span></h1>
                    <h1 className=''>Create your story</h1>
                </div>
                {visible === true ? <div className='h-[90vh] p-2 w-[50vh]  py-10 rounded'>
                    <img className='w-full h-full object-cover' src={fullStory.imgUrl} alt="" />
                </div>
                    : <div className='h-[90vh] p-2 w-[50vh] bg-white shadow-sm shadow-black rounded'>
                        <div className='stores  flex  w-full px-2  whitespace-nowrap py-2 overflow-x-auto overflow-y-hidden '>
                            <div>
                                <div className="inline-block mx-1" >
                                    <div className="story w-32 h-32 p-1  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full ">
                                        <img className='rounded-full h-full w-full object-cover' src="https://images.unsplash.com/photo-1734365294861-3f6df6a6af89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    </div>
                                    <h1 className="text-xs text-center  font-semibold">

                                    </h1>
                                </div>
                            </div>
                            {newStory.map((story, i) => {
                                return (
                                    <>
                                        <div className="inline-block mx-1" key={i} onClick={() => {
                                            show(story)
                                        }}>
                                            <div className="story w-32 h-32 p-1  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full ">
                                                <img className='rounded-full h-full w-full object-cover' src={story.dpImgUrl} alt="" />
                                            </div>
                                            <h1 className="text-xs text-center  font-semibold">

                                            </h1>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                        <form

                            onSubmit={(e) => {
                                SubmitHendler(e)
                            }} className='h-[60vh] flex flex-col justify-center item-start gap-7'>
                            <h1 className='my-5 text-3xl uppercase'>create story</h1>
                            <div className='flex gap-10'>
                                <label htmlFor="img" className='text-xl '>IMAGE: </label>
                                <input
                                    type="text"
                                    placeholder='PASTE YOUR IMAGE'
                                    id='img'
                                    className='py-1 border-2 border-black  outline-none px-2'
                                    onChange={(e) => {
                                        setImgUrl(e.target.value)
                                    }}
                                    value={imgUrl}
                                />
                            </div>

                            <div>
                                <label htmlFor="dpimg" className='text-xl'>DP IMAGE: </label>
                                <input
                                    type="text"
                                    placeholder='PASTE YOUR IMAGE'
                                    id='dpimg'
                                    className='py-1 border-2 border-black outline-none px-2'
                                    onChange={(e) => {
                                        setDpImgUrl(e.target.value)
                                    }}
                                    value={dpImgUrl}
                                />
                            </div>
                            <button className='w-full border-2 border-black  bg-white uppercase py-2'>create</button>
                        </form>
                    </div>
                }
            </div>
            <ImgScroll />
        </div>
    )
}

export default Story
